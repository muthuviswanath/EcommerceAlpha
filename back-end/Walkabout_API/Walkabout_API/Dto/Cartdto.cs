using System.Globalization;
using Walkabout_API.Models;

namespace Walkabout_API.Dto
{
    public class Cartdto
    {
        public int CartId { get; set; }
        public int UserId { get; set; }

        public double CartTotal { get; set; }

        public Product Product  { get; set; }

        public string UserName  { get; set; }

        public string Address   { get; set; }

    }
}
