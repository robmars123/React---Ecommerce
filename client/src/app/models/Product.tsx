import { ProductImage } from "./ProductImage";

export interface Category
{
    category_Id?: string,
    category_Name?: string
  }

export interface Product {
        product_Id: number;
        product_Name: string;
        price: number;
        category_Id?: any;
        subcategory_Id?: any;
        date_Added: Date;
        date_Modified?: any;
        description?: any;
        quantityPerUnit: number;
        date_Removed?: any;
        productImages?: ProductImage[] | any;

        category: Category;
    }

