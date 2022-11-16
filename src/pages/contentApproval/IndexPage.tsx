import ContentApprovalList, {
  useGetContentApprovalList,
} from 'components/ContentApproval/List'
import PageTitle from 'components/PageTitle'

const ContentApprovalPage = () => {
  const { filter, query, pagination, onFilterChange, onTableChange } =
    useGetContentApprovalList()

  const dataSource = query.data?.getContentPackList.payload

  return (
    <>
      <PageTitle>การยืนยันหลักสูตร</PageTitle>

      <ContentApprovalList
        loading={query.loading}
        dataSource={dataSource}
        filter={filter}
        pagination={pagination}
        onFilterChange={onFilterChange}
        onTableChange={onTableChange}
        onFinish={(values) => {
          console.log(values)

          console.log('Waiting for bulking status change API')
        }}
      />
    </>
  )
}

export default ContentApprovalPage
