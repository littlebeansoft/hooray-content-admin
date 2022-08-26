import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import type { ILayoutProps } from './interface'

const { Content } = Layout

const MainLayout: React.FC<ILayoutProps> = ({ children, breadcrumb }) => {
  return (
    <Layout style={{ minHeight: '100vh', maxHeight: '100vh' }}>
      <div style={{ padding: 15 }}>
        <Breadcrumb separator={<RightOutlined />}>
          <Breadcrumb.Item>Admin Panel</Breadcrumb.Item>
          {breadcrumb?.map((value, index) => (
            <Breadcrumb.Item key={`breadcrumb-${index}`}>{value}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <Divider />
      </div>
      <Content style={{ margin: '0px 16px 0' }}>{children}</Content>
    </Layout>
  )
}

export default MainLayout
