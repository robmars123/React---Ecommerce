﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Domain.Models
{
    [Table("Customers")]
    public class Customer
    {
        [Key]
        public int Customer_Id { get; set; }
        public string User_Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Address { get; set; }
        public string Email_Address { get; set; }
        public string Phone_Number { get; set; }
        [NotMapped]
        [DisplayName("Customer")]
        public string FullName
        {
            get
            {
                return First_Name + " " + Last_Name;
            }
        }
        public virtual ICollection<Order> Orders { get; set; }
        [NotMapped]
        [DataType(DataType.Currency)]
        public decimal TotalSpent { get; set; }
    }
}