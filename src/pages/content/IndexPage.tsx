import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import ContentList, { useGetContentList } from 'components/Content/List'
import PageTitle from 'components/PageTitle'

const ContentPage = () => {
  const { query, filter, pagination, onFilterChange, onTableChange } =
    useGetContentList()

  const navigate = useNavigate()

  const section = query.data?.getSectionByID.payload
  const dataSource = query.data?.getContentList.payload

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        เนื้อหาของบทเรียน {section?.title}
      </PageTitle>

      <ContentList
        loading={query.loading}
        filter={filter}
        dataSource={dataSource}
        pagination={pagination}
        onFilterChange={onFilterChange}
        onTableChange={onTableChange}
      />
    </>
  )
}

export default ContentPage
