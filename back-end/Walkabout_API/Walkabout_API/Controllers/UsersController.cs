using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Walkabout_API.Models;

namespace Walkabout_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly WalkaboutContext _context;

        public UsersController(WalkaboutContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet, Authorize]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{username}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser(string username)
        {
            var user = _context.Users.Where(u => u.UserName == username).ToList();

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpGet("Username/{username}")]

        public int GetUserIdByName(string username)
        {
            var user = _context.Users.FirstOrDefault(u => u.UserName.Equals(username));

            if (user == null)
            {
                return 0;
            }

            return user.UserId;

        }



        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }

        [HttpPost("LoginUser")]
        public IActionResult login(Login user)
        {
            var userExists = _context.Users.Where(u => u.UserName == user.UserName && u.Password == user.Password).FirstOrDefault();
            if (userExists != null) return Ok("Success");
            return Ok("Failure");
        }
    }
}
