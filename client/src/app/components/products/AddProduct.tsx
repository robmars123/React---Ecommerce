import React from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, Space } from 'antd';
import { Breadcrumb, Layout, Menu, Card, List } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { Product } from '../../models/Product';

const { Header, Content, Sider } = Layout;

interface Props{
    products: Product[];
}


  
  const AddProduct = () => {
    return <h1>Blog Articles</h1>;
  };
  
  export default AddProduct;