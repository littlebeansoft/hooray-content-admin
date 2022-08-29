import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import ContentCreateCard from 'components/ContentPackComponent/ContentCreateCard'

const CreateContentPack: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Content Pack ', 'สร้างผู้มุ่งหวังใหม่']}>
      <TitleComponent
        title="สร้างผู้มุ่งหวังใหม่"
        onBack={() =>
          router.push({
            pathname: `/org/[orgToken]/content-pack`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <ContentCreateCard />
    </MainLayout>
  )
}

export default withAuth(CreateContentPack)
