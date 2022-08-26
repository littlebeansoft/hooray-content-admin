import { Card } from 'antd'
import { useRouter } from 'next/router'

import TitleComponent from 'components/TitleComponent'

interface ContentProps {
  title: string
  backPath?: string
}

const Content: React.FC<ContentProps> = ({ title, backPath, children }) => {
  const router = useRouter()

  return (
    <>
      <TitleComponent title={title} onBack={backPath ? onBack : undefined} />
      <Card style={{ marginTop: 16 }}>{children}</Card>
    </>
  )

  function onBack() {
    router.push({
      pathname: backPath,
      query: router.query,
    })
  }
}

export default Content
