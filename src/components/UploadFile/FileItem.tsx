import styled from '@emotion/styled'
import ActionMenu from './ActionMenu'

import FileDisplayItem from './FileDisplayItem'

import type { FileListItemData } from './type'

interface FileItemProps {
  file: FileListItemData
}

const FileItem = ({ file }: FileItemProps) => {
  return (
    <Container>
      <FileDisplayItem file={file} />

      <ActionMenu file={file} />

      <Overlay className="upload-image-and-video-overlay" />
    </Container>
  )
}

export default FileItem

const Container = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
  position: relative;

  &:hover {
    .upload-image-and-vide-action-menu-container {
      opacity: 1;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`
