type ACLType = 'PUBLIC' | 'PRIVATE'

export interface UploadImageProps {
  disabled?: boolean
  aclType?: ACLType
  value?: string[]
  isEdit?: boolean
  allowFileExtensions?: string
  maximumUploadItems?: number
  onChange?: (value?: string[]) => void
}

export interface FileListProps {
  aclType?: ACLType
  isEdit?: boolean
  fileList?: string[]
  onPreview?: (src: string) => void
  onRemove?: (index: number) => void
}
