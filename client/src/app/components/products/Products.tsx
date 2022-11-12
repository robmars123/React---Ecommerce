import { List, Card, Button, Col, Divider, Row, Carousel } from "antd";
import Meta from "antd/lib/card/Meta";
import { Content } from "antd/lib/layout/layout";
import axios from "axios";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Product } from "../../models/Product";
import ProductDetails from "./ProductDetails";
import { ProductImage } from "../../models/ProductImage";
import Item from "antd/lib/list/Item";

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
  };
export default function Products(){
    const [products, setProducts] = useState<Product[]>([]);
    let url: string = 'https://localhost:7204/api/products';
//Grab products from Controller Product service
useEffect(() => {
    axios.get<Product[]>(url).then(response =>{
      console.log(response);
      setProducts(response.data);
  });
}, []);

   return(

    
    <div className="content"
    style={{
          maxWidth: '70%',
          margin: 'auto',
          background: 'white',
          padding: '30px',
          marginTop: '50px',
          alignContent: 'center'
      }}>
            <Carousel autoplay
                style={{
                maxWidth: '100%',
                margin: 'auto',
                marginTop: '50px',
                maxHeight: '500px'
                }}>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

        <Content>
                <List
                        grid={{
                        gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                        }}
                        dataSource={products}
                        renderItem= {item => (
                        <List.Item>
                                    <Link to={`/ProductDetails/${item.product_Id}`}>
                                            <Card hoverable 
                                                style={{padding: '20px',textAlign: 'center'}}
                                                cover=
                                                {
                                                    item.productImages[0]?.convertedProductImage != undefined ? 
                                                    (<img src={`${item.productImages[0]?.convertedProductImage}`}/>)
                                                    : 
                                                    <span>No Image</span>
                                                }
                                            >
                                                <h3 style={{fontWeight: 'bold'}}>{item.product_Name}</h3>
                                                <h2>${item.price}</h2>
                                            </Card>
                                    </Link>                          
                        </List.Item>
                        )} 
                />
        </Content>
        </div>
        );

    }

    
    


