import type { ReactNode } from 'react'

import { Layout } from 'antd'
import styled from '@emotion/styled'

interface PageLayoutProps {
  children: ReactNode
}

const { Content } = Layout

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Layout>
      <Content id="main-content">
        {children}

        <Version>v{process.env.REACT_APP_VERSION}</Version>
      </Content>
    </Layout>
  )
}

export default PageLayout

const Version = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
  font-weight: bold;
  font-size: 12px;
  padding: 2px 4px;
  background: #f1f1f1;
  border-radius: 6px;
`
