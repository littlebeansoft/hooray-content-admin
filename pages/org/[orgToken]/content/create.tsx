import React from 'react'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import ContentTabsCard from 'components/Product/ContentTabsCard'
import { Button, Space } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import MainLayout from 'layouts/MainLayout'
import TitleComponent from 'components/TitleComponent'
import ContentCreateCard from 'components/Content/ContentCreate/ContentCreateCard'

const ContentCreate: React.FC = () => {
  const router = useRouter()

  const onBack = () => {
    router.push({
      pathname: `/org/[orgToken]/content`,
      query: {
        ...router.query,
      },
    })
  }

  return (
    <MainLayout breadcrumb={['Home', 'Content']}>
      <TitleComponent title="Add New Content" onBack={onBack} />
      <ContentCreateCard />
    </MainLayout>
  )
}

export default withAuth(ContentCreate)
