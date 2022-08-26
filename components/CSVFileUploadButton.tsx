import type { FC } from 'react'
import type { ParseResult } from 'papaparse'

import { Button, Upload, UploadProps } from 'antd'

import { convertCSVToJSON } from 'utils/utils'

interface CSVFileUploadButtonProps {
  uploadProps?: UploadProps
  onUploadCSVCompleted?: (result: ParseResult<any>) => void
}

const CSVFileUploadButton: FC<CSVFileUploadButtonProps> = ({ uploadProps, onUploadCSVCompleted }) => {
  const customUploadProps: UploadProps = {
    accept: '.csv',
    beforeUpload: async (file) => {
      const result = await convertCSVToJSON(file)

      onUploadCSVCompleted?.(result)

      return false
    },
    maxCount: 1,
    ...uploadProps,
  }

  return (
    <Upload {...customUploadProps}>
      <Button type="primary">Upload source file (CSV)</Button>
    </Upload>
  )
}

export default CSVFileUploadButton
