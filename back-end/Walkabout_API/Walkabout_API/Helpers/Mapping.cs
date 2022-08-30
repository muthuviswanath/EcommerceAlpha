using System.Runtime;
using AutoMapper;
using Walkabout_API.Controllers;
using Walkabout_API.Dto;
using Walkabout_API.Models;
namespace Walkabout_API.Helpers
{
    public class Mapping:Profile
    {
        public Mapping()
        {
            CreateMap<Product, Productdto>();
        }
    }
}
