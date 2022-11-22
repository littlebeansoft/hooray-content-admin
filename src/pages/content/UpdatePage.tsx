import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import PageTitle from 'components/PageTitle'

const ContentUpdatePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        แก้ไขเนื้อหา
      </PageTitle>

      <h1>Form goes here</h1>
    </>
  )
}

export default ContentUpdatePage
