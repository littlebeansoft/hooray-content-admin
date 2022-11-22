import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import PageTitle from 'components/PageTitle'
import ContentTabs from 'components/Content/Tabs'

const ContentPackUpdatePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        แก้ไขข้อมูลหลักสูตร
      </PageTitle>

      <ContentTabs />
    </>
  )
}

export default ContentPackUpdatePage
