using Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Seed
    {

        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>() {
                new Product
                {
                     Product_Name = "iPhone",
                     Description = "Product of Apple.",
                     Date_Added = DateTime.Now,
                     Price = 0,
                     QuantityPerUnit = 1
                }

            };

        }
    }
}
