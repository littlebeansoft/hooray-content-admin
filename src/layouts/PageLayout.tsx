import type { ReactNode } from 'react'

import { Layout } from 'antd'

interface PageLayoutProps {
  children: ReactNode
}

const { Content } = Layout

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Layout>
      <Content id="main-content">{children}</Content>
    </Layout>
  )
}

export default PageLayout
