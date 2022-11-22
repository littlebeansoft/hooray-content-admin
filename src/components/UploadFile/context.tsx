import type { RcFile, UploadFile } from 'antd/es/upload'

import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import cloneDeep from 'lodash/cloneDeep'

import { withS3URL } from 'helpers/app'

import { getBase64 } from './utils'

import type { FileInput } from 'graphql/__generated/operations'
import type { FileListItemData, FilePreview } from './type'

interface UploadContextData {
  isUploading: boolean
  fileList: FileListItemData[]
  preview: FilePreview | undefined
  updateFileListByID: (file: Partial<FileListItemData>) => void
  onPreview: (file: FileListItemData) => void
  onDelete: (file: FileListItemData) => void
  onCancelPreview: VoidFunction
  onUploadStart: VoidFunction
  onUploadEnd: VoidFunction
  onUploadChange: (file: UploadFile<any>) => Promise<void>
}

interface UploadProviderProps {
  value?: FileInput[]
  onChange?: (value: FileInput[]) => void
  children: ReactNode
}

const UploadContext = createContext<any>(null)

export const UploadProvider = ({
  value,
  onChange,
  children,
}: UploadProviderProps) => {
  const [fileList, setFileList] = useState<FileListItemData[]>(
    createInitialFileList(value)
  )

  const [preview, setPreview] = useState<FilePreview>()
  const [isUploading, setIsUploading] = useState(false)

  const selfHandleOnChange = (fileList: FileListItemData[]) => {
    setFileList(fileList)

    const result: FileInput[] = fileList.map((item) => ({
      file: item.fileKey,
      name: item.alt,
    }))

    onChange?.(result)
  }

  const updateFileListByID = (file: Partial<FileListItemData>) => {
    const newFileList = cloneDeep(fileList)

    const result = newFileList.map((item) => {
      if (item.id === file.id) {
        return {
          ...item,
          ...file,
        }
      }

      return item
    })

    selfHandleOnChange(result)
  }

  const onUploadChange = async (file: UploadFile) => {
    const newFile: FileListItemData = {
      id: file.uid,
      url: await getBase64(file as RcFile),
      alt: file.name,
      fileKey: '',
      rcFile: file as RcFile,
    }

    selfHandleOnChange(fileList.concat([newFile]))
  }

  const onUploadStart = () => {
    setIsUploading(true)
  }
  const onUploadEnd = () => {
    setIsUploading(false)
  }

  const onPreview = (file: FileListItemData) => {
    setPreview({
      visible: true,
      url: file.url,
    })
  }

  const onCancelPreview = () => {
    setPreview({
      visible: false,
    })
  }

  const onDelete = (file: FileListItemData) => {
    const result: FileListItemData[] = fileList.filter(
      (item) => item.id !== file.id
    )

    selfHandleOnChange(result)
  }

  const contextValue: UploadContextData = {
    isUploading,
    fileList,
    preview,
    updateFileListByID,
    onPreview,
    onCancelPreview,
    onDelete,
    onUploadChange,
    onUploadStart,
    onUploadEnd,
  }

  return (
    <UploadContext.Provider value={contextValue}>
      {children}
    </UploadContext.Provider>
  )
}

const useUploadContext = () => useContext<UploadContextData>(UploadContext)

export default useUploadContext

const createInitialFileList = (value?: FileInput[]): FileListItemData[] => {
  if (value == null) {
    return []
  }

  return value.map((item) => ({
    id: uuidV4(),
    url: withS3URL(item.file),
    alt: item.name,
    fileKey: item.file,
  }))
}
