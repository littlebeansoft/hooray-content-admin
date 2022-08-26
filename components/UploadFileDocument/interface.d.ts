type ACLType = 'PUBLIC' | 'PRIVATE'

export interface UploadFileProps {
  aclType?: ACLType
  refId?: string
  value?: string[]
  isEdit?: boolean
  allowFileExtensions?: string
  maximumUploadItems?: number
  onChange?: (value?: string[]) => void
}

export interface FileListProps {
  aclType?: ACLType
  isEdit?: boolean
  fileList?: fileListArrProps[]
  onPreview?: (src: string) => void
  onRemove?: (index: number) => void
}

export interface fileListArrProps {
  fileName: string
  fileKey: string
  fileType: string
  fileExtension: string
}
