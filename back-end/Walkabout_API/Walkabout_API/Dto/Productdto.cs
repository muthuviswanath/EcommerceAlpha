namespace Walkabout_API.Dto
{
    public class Productdto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public string ImagePath { get; set; }
        public string ProductDescription { get; set; }
        public double ProductRating { get; set; }
        public double ProductOfferPrice { get; set; }
        public string ProductCategory { get; set; }
        public int UserId  { get; set; }
    }
}
