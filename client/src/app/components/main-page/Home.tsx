import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Carousel, MenuProps, Space } from 'antd';
import { Breadcrumb, Layout, Menu, Card, List } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { Product } from '../../models/Product';
import NavBar from '../../layout/NavBar';
import AddProduct from '../products/AddProduct';
import Products from '../products/Products';

const { Header, Content, Sider } = Layout;



export default function Home(){
return(
    <Products />

)}