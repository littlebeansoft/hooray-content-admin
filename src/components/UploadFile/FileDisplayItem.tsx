import styled from '@emotion/styled'

import UploadProgress from './UploadProgress'

import { getFileExtensionType } from './utils'

import type { FileListItemData } from './type'

interface FileDisplayItemProps {
  file: FileListItemData
}

const FileDisplayItem = ({ file }: FileDisplayItemProps) => {
  return (
    <Container>
      {renderFileDisplayItemByFileType()}

      <UploadProgress file={file} />
    </Container>
  )

  function renderFileDisplayItemByFileType() {
    const fileType = getFileExtensionType(file.url)

    switch (fileType) {
      case 'document':
        return null

      case 'video':
        return <video controls={false} src={file.url} />

      default:
      case 'image':
        return <img src={file.url} alt={file.alt} />
    }
  }
}

export default FileDisplayItem

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
