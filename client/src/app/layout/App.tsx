import React, { Fragment, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
//import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Affix, Col, MenuProps, Row, Switch } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { Product } from '../models/Product';
import Home from '../components/main-page/Home';
import axios from 'axios';
import Sider from 'antd/lib/layout/Sider';
import NavBar from '../layout/NavBar'
import { Link, Route,  Router,  Routes } from 'react-router-dom';
import AddProduct from '../components/products/AddProduct';
import Products from '../components/products/Products';
import ProductDetails from '../components/products/ProductDetails';
import { OmitProps } from 'antd/lib/transfer/ListBody';


function App() { 
  return (
    <>
      {/* Routes --> Route --> Route with id is used to pass parameters. */}
        <Content>
            <div className="topnav" id="myTopnav">
            <Link to="/" className="active">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="#about">About</Link>
            </div>
            <Routes>            
                  <Route  path="/" element={<Home />}/>  
                  <Route  path="/products" element={<Products />}/>   
                  <Route  path="/productDetails/">  
                          <Route path=":id" element={<ProductDetails />} />
                  </Route> 
            </Routes> 
        </Content>
      <footer style={{ textAlign: 'center' }}>2022 - Robten Ecommerce</footer>
    </>
  );
}
export default App;

