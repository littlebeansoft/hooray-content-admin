import React from 'react'

import FullWidthSpace from 'components/FullWidthSpace'
import ImageOrVideoPreview from 'components/ImageOrVideoPreview'

import { getS3UrlByType } from 'helpers/app'

import type { FileListProps } from './interface'

const FileList: React.FC<FileListProps> = ({ isEdit, fileList, onPreview, onRemove, children }) => {
  const s3Url = getS3UrlByType('PUBLIC')

  return (
    <FullWidthSpace size={16} wrap align="start">
      {fileList &&
        fileList.length > 0 &&
        fileList.map((fileKey, index) => {
          const src = `${s3Url}/${fileKey}`

          return (
            <ImageOrVideoPreview
              key={index}
              index={index}
              src={src}
              alt={src}
              isEdit={isEdit}
              onPreview={onPreview}
              onRemove={onRemove}
            />
          )
        })}
      {isEdit && children}
    </FullWidthSpace>
  )
}

export default FileList
