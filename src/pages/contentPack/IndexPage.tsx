import { message } from 'antd'

import ContentList, { useGetContentList } from 'components/ContentPack/List'
import PageTitle from 'components/PageTitle'

import { useDeleteContentPackMutation } from 'graphql/__generated/operations'

const ContentPackPage = () => {
  const { filter, query, pagination, onFilterChange, onTableChange } =
    useGetContentList()

  const [deleteContentPacks, { loading }] = useDeleteContentPackMutation({
    onCompleted() {
      message.success('ลบหลักสูตรเรียบร้อยแล้ว')

      query.refetch()
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถลบหลักสูตรได้ โปรดลองใหม่อีกครั้ง')
    },
  })

  const dataSource = query.data?.getContentPackList.payload

  return (
    <>
      <PageTitle>หลักสูตร</PageTitle>

      <ContentList
        loading={query.loading || loading}
        dataSource={dataSource}
        filter={filter}
        pagination={pagination}
        onFilterChange={onFilterChange}
        onTableChange={onTableChange}
        onDeleteListContentPacks={(ids) => {
          deleteContentPacks({
            variables: {
              ids,
            },
          })
        }}
      />
    </>
  )
}

export default ContentPackPage
