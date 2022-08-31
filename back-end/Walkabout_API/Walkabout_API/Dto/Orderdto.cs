using System;
using Walkabout_API.Models;
namespace Walkabout_API.Dto
{
    public class Orderdto
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public Product Product { get; set; }
        public User User { get; set; }
        public double Price { get; set; }
        public DateTime OrderDate { get; set; }

    }
}
