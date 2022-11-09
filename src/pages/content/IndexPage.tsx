import ContentList, { useGetContentList } from 'components/Content/List'
import PageTitle from 'components/PageTitle'

const ContentPage = () => {
  const { filter, query, pagination, onFilterChange, onTableChange } =
    useGetContentList()

  const dataSource = query.data?.getContentPackList.payload

  return (
    <>
      <PageTitle>หลักสูตร</PageTitle>

      <ContentList
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

export default ContentPage
