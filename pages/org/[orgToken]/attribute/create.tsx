import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import PropertyCreateCard from 'components/Attribute/AttributeCreate/AttributeCreateCard'

const CategoryCreatePack: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Add New Property']}>
      <TitleComponent
        title="Add New Property"
        onBack={() =>
          router.push({
            pathname: `/org/[orgToken]/property`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <PropertyCreateCard />
    </MainLayout>
  )
}

export default withAuth(CategoryCreatePack)
