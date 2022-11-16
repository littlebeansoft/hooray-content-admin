import type { UploadProps } from 'antd'

import UploadFileList from './FileList'
import UploadPreviewModal from './PreviewModal'

import useUploadContext, { UploadProvider } from './context'

import type { FileInput } from 'graphql/__generated/operations'

interface UploadFileProps extends Omit<UploadProps, 'onChange'> {
  value?: FileInput[]
  onChange?: (value?: FileInput[]) => void
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
