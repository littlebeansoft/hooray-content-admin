import type { UploadProps } from 'antd'

import UploadFileList from './FileList'
import UploadPreviewModal from './PreviewModal'

import useUploadContext, { UploadProvider } from './context'

interface UploadFileProps extends Omit<UploadProps, 'onChange'> {
  value?: string[]
  onChange?: (value?: string[]) => void
  allowFileExtension?: string
  maxUploadItems?: number
  disabled?: boolean
}

const UploadFile = ({ value, onChange, ...props }: UploadFileProps) => {
  const providerProps = {
    value,
    onChange,
  }

  return (
    <UploadProvider {...providerProps}>
      <UploadFileContent {...props} />
    </UploadProvider>
  )
}

export default UploadFile

export type UploadFileContentProps = Pick<
  UploadFileProps,
  'allowFileExtension' | 'maxUploadItems' | 'disabled'
>

const UploadFileContent = (props: UploadFileContentProps) => {
  const { preview, onCancelPreview } = useUploadContext()

  return (
    <>
      <UploadFileList {...props} />

      <UploadPreviewModal preview={preview} onCancelPreview={onCancelPreview} />
    </>
  )
}
