import CategoryList, { useGetListCategories } from 'components/Category/List'
import PageTitle from 'components/PageTitle'

const CategoryPage = () => {
  const { query, filter, pagination, onFilterChange, onTableChange } =
    useGetListCategories()

  const dataSource = query.data?.getCategory.payload

  return (
    <>
      <PageTitle>หมวดหมู่หลักสูตร</PageTitle>

      <CategoryList
        loading={query.loading}
        dataSource={dataSource}
        filter={filter}
        pagination={pagination}
        onFilterChange={onFilterChange}
        onTableChange={onTableChange}
      />
    </>
  )
}

export default CategoryPage
