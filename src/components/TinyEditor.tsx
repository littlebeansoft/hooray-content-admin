import { useState } from 'react'
import { Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Editor, IAllProps } from '@tinymce/tinymce-react'

import { getTinyEditorAPIKey } from 'helpers/app'

const TinyEditor = (props: Omit<IAllProps, 'apiKey' | 'onInit'>) => {
  const [isEditorLoading, setIsEditorLoading] = useState(true)

  const apiKey = getTinyEditorAPIKey()

  if (apiKey == null) {
    return (
      <Alert
        type="error"
        message="ไม่สามารถเรียกข้อมูลเครื่องมือแก้ไขเนื้อหาได้"
      />
    )
  }

  return (
    <>
      {isEditorLoading ? <LoadingOutlined /> : null}

      <Editor
        apiKey={apiKey}
        onInit={() => setIsEditorLoading(false)}
        {...props}
      />
    </>
  )
}

export default TinyEditor
