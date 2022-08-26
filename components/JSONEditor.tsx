import type { FC } from 'react'

import JSONInput from 'react-json-editor-ajrm'
import colors from 'react-json-editor-ajrm/themes'
import locale from 'react-json-editor-ajrm/locale/en'

interface JSONEditorProps {
  value?: any
  onChange?: (value?: any) => void
}

const JSONEditor: FC<JSONEditorProps> = ({ value, onChange }) => {
  return (
    <JSONInput
      id="jsonInput"
      placeholder={value}
      onChange={({ jsObject }: { jsObject: object }) => {
        onChange?.(jsObject)
      }}
      locale={locale}
      colors={colors.dark_vscode_tribute}
      width="100%"
      height="550px"
      style={{
        body: {
          fontSize: 18,
        },
        labels: {
          fontSize: 18,
        },
      }}
    />
  )
}

export default JSONEditor
