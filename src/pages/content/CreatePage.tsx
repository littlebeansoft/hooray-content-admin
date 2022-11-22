import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import PageTitle from 'components/PageTitle'

const ContentCreatePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        สร้างเนื้อหา
      </PageTitle>

      <h1>Form goes here</h1>
    </>
  )
}

export default ContentCreatePage
