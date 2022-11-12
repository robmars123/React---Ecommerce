import { Card, Col, Layout, List, Row,Image, Button, Input } from "antd";
import { Content } from "antd/lib/layout/layout";
import Item from "antd/lib/list/Item";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../models/Product";
import { ProductImage } from "../../models/ProductImage";
import './Product-style.css'

const { Meta } = Card;
export default function ProductDetails() {
    const [visible, setVisible] = useState(false);
    let { id } = useParams();
    let selectedProduct: Product | undefined;
    let imageList: ProductImage[];
    const [product, setProduct] = useState<Product>();
    
    //Post to the server and get entity of a product.
    useEffect(() => { 
        //let url: string = ;
        axios.get<Product>('https://localhost:7204/api/products/id?id=' + id).then(response =>{
        console.log(response);
        setProduct(response.data);
        
      });
    }, [])

    selectedProduct = product; // Display other product information
    imageList = product?.productImages; //Store the image array to be displayed
    function selectFirstImage(images : ProductImage[]): string | undefined{
        if (images != undefined){
            return images[0]?.convertedProductImage;
        }
    }

 return(
    <Fragment>
        <div className="content"
            style={{
                    maxWidth: '60%',
                    margin: 'auto',
                    background: 'white',
                    padding: '30px',
                    marginTop: '60px'
                }}>      
            <div className="body-wrapper"></div>
            <main className="item">
                <section className="img" style={{marginTop: '50px'}}>
                    <Image
                        preview={{ visible: false }}
                        width={300}
                        src={`${selectFirstImage(selectedProduct?.productImages)}`} onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }} >
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            {imageList?.map((image: ProductImage) => <Image  src={`${image.convertedProductImage}`} />)}
                        </Image.PreviewGroup>
                    </div>
                </section>

                <section className="price">
                    <h2 >Product Details</h2>
                    <span>{selectedProduct?.category.category_Name}</span>
                    <span className="price-main__heading">{selectedProduct?.product_Name}</span>
                    <div className="price-box">
                        <div className="price-box__main">
                            <span className="price-box__main-new">${selectedProduct?.price}</span>
                            <span className="price-box__main-discount"> 50%</span>
                        </div>
                    <span className="price-box__old">$250.00</span>
                    </div>
                    
                    <Card hoverable>
                        {selectedProduct?.description}
                        <Meta title="Delivery " description="Russia, USA, and Europe" style={{marginTop: '10px'}}/>
                    </Card>
                    <div className="price-btnbox">
                        <div className="price-btns">
                            <Input placeholder="0" style={{ width: '70px', textAlign: 'center' }}/>
                            <span>Add Quantity</span>
                        </div>

                    <button className="button-add-cart-main button-add-cart">Add To Cart</button>
                    </div>
                </section>
            </main>
                <div>
                <Link to={`/Products/`} className="backLink">
                    Back
                </Link>
                </div>
            </div>
    </Fragment>
    );
}


