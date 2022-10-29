using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Domain.Models
{
    [Table("ProductImages")]
    public class ProductImage
    {
        [Key]
        public int Image_Id { get; set; }
        
        public int Product_Id { get; set; }
        public byte[] Image { get; set; }
        [NotMapped]
        public string ConvertedProductImage { get; set; }

    }
}