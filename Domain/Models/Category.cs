using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Domain.Models
{
    [Table("Categories")]
    public class Category
    {
        [Key]
        public int Category_Id { get; set; }
        public string Category_Name { get; set; }
    }
}