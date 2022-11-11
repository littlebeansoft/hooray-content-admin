import { Space, Upload } from 'antd'

import UploadButton from './Button'
import FileItem from './FileItem'

import useUploadContext from './context'

import type { UploadFileContentProps } from './UploadFile'

const UploadFileList = ({
  allowFileExtension = '.gif,.jpeg,.jpg,.png,.mp4',
  maxUploadItems = 1,
  disabled,
}: UploadFileContentProps) => {
  const { fileList, onUploadChange } = useUploadContext()

  const shouldHideUploadButton = maxUploadItems <= fileList?.length

  return (
    <Space wrap>
      {fileList.map((item) => (
        <FileItem key={item.id} file={item} />
      ))}

      <Upload
        accept={allowFileExtension}
        showUploadList={false}
        disabled={disabled}
        beforeUpload={() => false}
        onChange={({ file }) => onUploadChange(file)}
      >
        <UploadButton hide={shouldHideUploadButton} />
      </Upload>
    </Space>
  )
}

export default UploadFileList
