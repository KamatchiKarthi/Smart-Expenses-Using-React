import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { SiWebmoney } from 'react-icons/si';
import { TfiDashboard } from 'react-icons/tfi';
import { SiExpensify } from 'react-icons/si';
import { TbReportMoney } from 'react-icons/tb';

const { Header, Sider, Content } = Layout;

export default function Home() {
  const location = useLocation();

  return (
    <Layout  style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header className="header ">
        <SiWebmoney />
        Expense Tracker App
      </Header>

      <Layout >
        {/* Sidebar */}
        <Sider className='sider !min-w-64' collapsible trigger={null}>
          <Menu  className='menubar'
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            items={[
              {
                key: '/',
                icon: <TfiDashboard />,
                label: <Link to="/">Dashboard</Link>,
              },
              {
                key: '/expenses',
                icon: <SiExpensify />,
                label: <Link to="/expenses">Expenses</Link>,
              },
              // {
              //   key: '/reports',
              //   icon: <TbReportMoney />,
              //   label: <Link to="/reports">Reports</Link>,
              // },
            ]}
          />
        </Sider>

        {/* Content */}
        <Layout className='!bg-gray-400'>
          <Content  style={{ margin: '24px 16px', padding: 24 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
