import type { RcFile } from 'antd/es/upload'

import type { FileListItemData } from './type'

type FileType = 'video' | 'image' | 'document'

const isImageFile = (file: string) =>
  /\.(gif|jpg|jpeg|tiff?|png|webp|bmp)$/i.test(file)

const isVideoFile = (file: string) => /\.(mp4|mp5)$/i.test(file)

const isBase64 = (file: string) => file.includes('base64')

const getFileType = (file: string): FileType => {
  if (isImageFile(file)) {
    return 'image'
  }

  if (isVideoFile(file)) {
    return 'video'
  }

  return 'document'
}

const getFileTypeFromBase64 = (file: string) => {
  const extension = file.split(';')[0].split('/')[1]

  return getFileType(`.${extension}`)
}

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export const getFileExtension = (file: FileListItemData) => {
  return file.alt?.split('.')[1].toLowerCase()
}

export const getFileExtensionType = (file?: string): FileType => {
  if (file == null) {
    return 'image'
  }

  if (isBase64(file)) {
    return getFileTypeFromBase64(file)
  }

  return getFileType(file)
}
