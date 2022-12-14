using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Walkabout_API.Dto;
using Walkabout_API.Models;

namespace Walkabout_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly WalkaboutContext _context;
        private readonly IMapper _mapper;

        public ProductsController(WalkaboutContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // get: api/products/5
             [HttpGet("{id}")]
             public async Task<ActionResult<Product>> GetProduct(int id)
             {
                
                // var product = await _context.Products.FindAsync(id);

                 return await _context.Products.FindAsync(id);


        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            System.Diagnostics.Debug.WriteLine("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.ProductId }, product);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
       
        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }

       
       

        [HttpGet("{SearchString}/{lowprice}/{highprice}/{sortby}")]
        public async Task<ActionResult<IEnumerable<Product>>> SearchProduct(string SearchString, int lowprice, int highprice, string sortby)
        {
            
            System.Diagnostics.Debug.WriteLine(SearchString);
            System.Diagnostics.Debug.WriteLine(lowprice);
            System.Diagnostics.Debug.WriteLine(highprice);
            System.Diagnostics.Debug.WriteLine(sortby);


            IQueryable<Product> Products;
            if (SearchString=="not_defined" && lowprice==0 && highprice==1000000)
            {
                Products  = _context.Products.Where(b => b.Price.CompareTo(lowprice) >= 0 && b.Price.CompareTo(highprice) <= 0);
            }
            else if(SearchString == "not_defined")
            {
               Products = _context.Products.Where(b => b.Price.CompareTo(lowprice) >= 0 && b.Price.CompareTo(highprice) <= 0);
            }
            else if(lowprice == 0 && highprice == 1000000)
            {
                Products = _context.Products.Where(b =>
                                          b.ProductName.Contains(SearchString) ||
                                          b.ProductCategory.Contains(SearchString) 
                                         
                                         );
            }
            else
            {
                Products = _context.Products.Where(b =>
                                                       (b.ProductName.Contains(SearchString)) ||
                                                       (b.ProductCategory.Contains(SearchString)) &&
                                                       (b.Price.CompareTo(lowprice) >= 0 && b.Price.CompareTo(highprice) <= 0)
                                                   );
            }

            if (sortby == "AscendingName") return await Products.OrderBy(name => name.ProductName).ToListAsync();
            else if (sortby == "DescendingName") return await Products.OrderByDescending(name => name.ProductName).ToListAsync();
            else if (sortby == "AscendingPrice") return await Products.OrderBy(name => name.Price).ToListAsync();
            else if (sortby == "DescendingPrice") return await Products.OrderByDescending(name => name.Price).ToListAsync();
            else return await Products.ToListAsync();
        }
       

    
    }
}
