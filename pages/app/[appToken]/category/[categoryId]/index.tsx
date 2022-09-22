import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import CategoryUpdateCard from 'components/Category/CategoryUpdateCard'
import getCategory from 'graphql/useGetCategory'
import { CategoryData, GetCategoryResp } from 'graphql/useGetCategory/interface'

const CategoryUpdate: React.FC = () => {
  const router = useRouter()
  const { categoryId = '' } = router.query
  const [category, setCategory] = React.useState<GetCategoryResp>()

  const attributeList = getCategory({
    context: {
      clientType: 'LABEL',
    },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        query: {
          categoryId: categoryId as string,
        },
      },
    },
    onCompleted(resp: CategoryData) {
      const data = resp.getCategory
      setCategory(data?.payload[0] as GetCategoryResp)
    },
  })

  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent
        title={category?.name || ''}
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/category`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <CategoryUpdateCard category={category} loading={attributeList.loading} categoryId={categoryId as string} />
    </MainLayout>
  )
}

export default withAuth(CategoryUpdate)
