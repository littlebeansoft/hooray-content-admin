import { useNavigate } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'

import PageTitle from 'components/PageTitle'
import ContentForm, { useParentFormInstance } from 'components/Content/Form'

const ContentCreatePage = () => {
  const navigate = useNavigate()

  const [form] = useParentFormInstance()

  return (
    <>
      <PageTitle>
        <LeftOutlined onClick={() => navigate(-1)} />
        สร้างเนื้อหา
      </PageTitle>

      <ContentForm form={form} />
    </>
  )
}

export default ContentCreatePage
