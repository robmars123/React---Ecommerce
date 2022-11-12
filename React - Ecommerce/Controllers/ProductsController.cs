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
            var productList = productService.GetProducts();

            return await productList;
        }

        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct(Product product)
        {
            return await productService.AddProduct(product);
        }

        [HttpGet("id")]
        public async Task<ActionResult<Product>> GetProductDetails(int id)
        {
            var product = await productService.GetProductDetails(id);
            return product;
        }


    }
}
