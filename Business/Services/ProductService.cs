using Business.Interfaces;
using Domain;
using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Results;

namespace Business.Services
{
    public class ProductService : IProductService
    {
        private readonly DataContext _context;
        public ProductService(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetProducts()
        {
            var products = _context.Products.Include(x=>x.Category).Include(subc =>subc.Subcategory).Include(images => images.ProductImages).ToListAsync();

            return await products;
        }

        public async Task<Product> AddProduct(Product product)
        {
            _context.Products.Add(product);

            await _context.SaveChangesAsync();

            return product;
        }

        public async Task<Product> GetProductDetails(int id)
        {
            var products = _context.Products.Include(x => x.Category).Include(images => images.ProductImages).Where(x=>x.Product_Id == id).FirstOrDefaultAsync();

            return await products;
        }

        //public List<ProductImage> GetImages(int productId)
        //{
        //    var imgList = _context.ProductImages.AsQueryable();
        //    List <ProductImage> images = imgList.Where(x=>x.Product_Id == productId).ToList();
        //    foreach (var item in images)
        //    {
        //        string imreBase64Data = Convert.ToBase64String(item.Image);
        //        item.ConvertedProductImage = string.Format("data:image/png;base64,{0}", imreBase64Data);
        //    }
        //    return images;
        //}

        //private void PrimaryProductImage(List<Product> products)
        //{
        //    products.ForEach(item =>
        //            item.PrimaryProduct_Image = GetImages(item.Product_Id).FirstOrDefault()
        //            );
        //    //foreach (var product in products)
        //    //{
        //    //    product.PrimaryProduct_Image = (GetImages(product.Product_Id).FirstOrDefault() != null) ? GetImages(product.Product_Id).FirstOrDefault() : null;
        //    //}

        //}
    }
}
