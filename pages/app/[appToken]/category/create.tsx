import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import CategoryCreateCard from 'components/Category/CategoryCreate/CategoryCreateCard'

const CategoryCreate: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Add New Category']}>
      <TitleComponent
        title="Add New Category"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/category`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <CategoryCreateCard />
    </MainLayout>
  )
}

export default withAuth(CategoryCreate)
