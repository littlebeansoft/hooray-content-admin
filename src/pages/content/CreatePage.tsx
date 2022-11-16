import ContentForm, { useParentFormInstance } from 'components/Content/Form'
import PageTitle from 'components/PageTitle'

const ContentCreatePage = () => {
  const [form] = useParentFormInstance()

  return (
    <>
      <PageTitle>สร้างหลักสูตร</PageTitle>

      <ContentForm form={form} />
    </>
  )
}

export default ContentCreatePage
