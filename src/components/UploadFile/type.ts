import type { RcFile } from 'antd/lib/upload'

export interface FileListItemData {
  id: string
  url: string
  alt?: string
  fileKey: string
  rcFile?: RcFile
}

export interface FilePreview {
  visible: boolean
  url?: string
}
