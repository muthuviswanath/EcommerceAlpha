using Walkabout_API.Models;

namespace Walkabout_API.Dto
{
    public class Wishlistdto
    {
        public int WishlistId { get; set; }
        public int UserId { get; set; }
        public Product Product { get; set; }
    }
}
