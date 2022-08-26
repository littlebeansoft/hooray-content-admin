import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import MasterDataUpdateCard from 'components/MasterData/MasterDataUpdateCard'
import { useRouter } from 'next/router'
import withAuth from 'middlewares/withAuth'

const Contact: React.FC = () => {
  const router = useRouter()
  const { parentKey = '' } = router.query
  return (
    <MainLayout breadcrumb={['Master data']}>
      <TitleComponent
        title="Update new master data"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/master-data`,
            query: {
              ...router.query,
              parentKey: parentKey || null,
            },
          })
        }
      />
      <MasterDataUpdateCard />
    </MainLayout>
  )
}

export default withAuth(Contact)
