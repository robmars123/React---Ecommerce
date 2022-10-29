using Business.Services;
using Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace React___Ecommerce.Controllers
{
    public class ProductsController : BaseController
    {
        private readonly ProductService productService;

        public ProductsController(ProductService productService)
        {
            this.productService = productService;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProductList()
        {
            return await productService.GetProducts();
        }
    }
}
