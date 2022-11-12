import { Menu, MenuProps } from "antd"

import React from "react"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Layout from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";


const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `Category`,
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option`,
          };
        }),
      };
    },
  );

  export default function NavBar(){
    return (
            <Sider className="site-layout-background" width={200}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={items2}
                />
                </Sider>
        );
    }