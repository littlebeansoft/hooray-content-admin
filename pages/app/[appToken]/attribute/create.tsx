import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import AttributeCreateCard from 'components/Attribute/AttributeCreate/AttributeCreateCard'

const CategoryCreate: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Add New Attribute']}>
      <TitleComponent
        title="Add New Attribute"
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/attribute`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <AttributeCreateCard />
    </MainLayout>
  )
}

export default withAuth(CategoryCreate)
