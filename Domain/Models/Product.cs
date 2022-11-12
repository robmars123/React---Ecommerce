using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Models
{
    public class Product
    {
        public Product()
        {
            QuantityPerUnit = 1;
        }
        [Key]
        public int Product_Id { get; set; }
        public string? Product_Name { get; set; }
        public decimal? Price { get; set; }
        public DateTime? Date_Added { get; set; }
        public DateTime? Date_Modified { get; set; }
        public string? Description { get; set; }
        public int? QuantityPerUnit { get; set; }
        public DateTime? Date_Removed { get; set; }
        public virtual ICollection<ProductImage> ProductImages { get; set; }
        public virtual Category Category { get; set; }
        public virtual Subcategory Subcategory { get; set; }
    }
}
