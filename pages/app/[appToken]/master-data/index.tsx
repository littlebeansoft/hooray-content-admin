import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import MasterDataTableCard from 'components/MasterData/MasterDataTableCard'
import { useRouter } from 'next/router'
import withAuth from 'middlewares/withAuth'

const MasterData: React.FC = () => {
  const router = useRouter()
  const { parentKey = '' } = router.query
  const parentKeyList = parentKey?.toString()?.split('.') || []
  const parentKeyOnBack = () => {
    const title = parentKeyList.pop()
    if (parentKeyList.length >= 3) {
      return {
        title: `All Master Data ${title}`,
        onBack: () =>
          router.push({
            pathname: `/app/[appToken]/master-data`,
            query: {
              ...router.query,
              parentKey: parentKeyList.join('.'),
            },
          }),
      }
    } else if (parentKeyList.length === 2) {
      return {
        title: `All Master Data ${title}`,
        onBack: () =>
          router.push({
            pathname: `/app/[appToken]/master-data`,
            query: {
              ...router.query,
              parentKey: null,
            },
          }),
      }
    } else {
      return {
        title: `All Master Data `,
      }
    }
  }

  return (
    <MainLayout breadcrumb={['Master Data']}>
      <TitleComponent {...parentKeyOnBack()} />
      <MasterDataTableCard />
    </MainLayout>
  )
}

export default withAuth(MasterData)
