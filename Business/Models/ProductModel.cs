using Business.Services;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Models
{
    public class ProductModel : Product
    {
        public virtual Product product { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<ProductImageModel> ProductImages { get; set; }
        //public ICollection<Category> Categories { get; set; }

        //public ICollection<Subcategory> Subcategories { get; set; }


    }
}
