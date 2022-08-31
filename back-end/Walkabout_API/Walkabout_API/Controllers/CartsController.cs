using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Walkabout_API.Dto;
using Walkabout_API.Models;
using static System.Net.Mime.MediaTypeNames;

namespace Walkabout_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private readonly WalkaboutContext _context;

        public CartsController(WalkaboutContext context)
        {
            _context = context;
        }

        // GET: api/Carts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cartdto>>> GetCarts()
        {
            var test = _context.Carts.Include(c => c.User).Include(c => c.Product).Select(x => new Cartdto
            {

       
                CartTotal = x.CartTotal,

                UserName = x.User.UserName,

                Address = x.User.Address,

                Product = x.Product

            });

            var value = await test.ToListAsync();

            return value;

        }
    

        // GET: api/Carts/5
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Cart>> GetCart(int id)
        {
            var cart = await _context.Carts.FindAsync(id);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }



        [HttpGet("User/{id}")]
        public async Task<ActionResult<IEnumerable<Cartdto>>> GetCartOfUser(int id)
        {
            var usersCart = _context.Carts.Where(x => x.UserId == id).Include(c => c.User).Include(c => c.Product).Select(x =>
            new Cartdto
            {
                CartTotal = x.CartTotal,
                UserName = x.User.UserName,
                UserId = x.UserId,
                CartId=x.CartId,
                Address = x.User.Address,
                Price=x.Product.Price,
                Product = x.Product
            });
            var value = await usersCart.ToListAsync();
            return value;
        }



        // PUT: api/Carts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCart(int id, Cart cart)
        {
            if (id != cart.CartId)
            {
                return BadRequest();
            }

            _context.Entry(cart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartExists(id))
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

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cart>> PostCart(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCart", new { id = cart.CartId }, cart);
        }

        // DELETE: api/Carts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCart(int id)
        {
            var cart = await _context.Carts.Include(c=>c.User).Include(c=>c.Product).FirstOrDefaultAsync(c =>c.CartId == id);
            if (cart == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CartExists(int id)
        {
            return _context.Carts.Any(e => e.CartId == id);
        }
    }
}
