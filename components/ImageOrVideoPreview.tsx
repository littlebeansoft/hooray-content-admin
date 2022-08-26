import React from 'react'
import { Popconfirm } from 'antd'
import styled from 'styled-components'

import FontAwesomeIcon from 'components/FontAwesomeIcon'
import PreviewVideo from 'components/PreviewVideo'
import DocumentFile from 'components/DocumentFile'

import { isDocumentSource, isVideoSource } from 'helpers/formatter'

interface ImageOrVideoPreviewProps {
  index: number
  src: string
  alt: string
  width?: string
  height?: string
  isEdit?: boolean
  onRemove?: (index: number) => void
  onPreview?: (src: string) => void
}

const ImageOrVideoPreview: React.FC<ImageOrVideoPreviewProps> = ({
  index,
  src,
  alt,
  width,
  height,
  isEdit,
  onRemove,
  onPreview,
}) => {
  return (
    <ImagePreviewWrapper width={width} height={height}>
      <FileDisplayWrapper>{renderSourceFile()}</FileDisplayWrapper>

      <ActionOverlay>
        <ActionOverlayContent>
          {isEdit && (
            <Popconfirm title="คุณแน่ใจที่จะลบไหม?" onConfirm={() => onRemove?.(index)}>
              <IconContent>
                <FontAwesomeIcon iconName="trash" />
              </IconContent>
            </Popconfirm>
          )}
          <IconContent onClick={onPreviewDocument}>
            <FontAwesomeIcon iconName="eye" onClick={() => onPreview?.(src)} />
          </IconContent>
        </ActionOverlayContent>
      </ActionOverlay>
    </ImagePreviewWrapper>
  )

  function renderSourceFile() {
    if (isVideoSource(src)) {
      return <PreviewVideo src={src} />
    } else if (isDocumentSource(src)) {
      return <DocumentFile src={src} />
    }

    return <Img width="100%" src={src} alt={alt} />
  }

  function onPreviewDocument() {
    if (isDocumentSource(src)) {
      window.open(src, '_blank')
    } else {
      onPreview?.(src)
    }
  }
}

export default ImageOrVideoPreview

const ImagePreviewWrapper = styled.div<{ width?: string; height?: string }>`
  display: block;
  margin: auto 0;
  position: relative;
  max-width: ${(p) => p.width || '150px'};
  min-width: ${(p) => p.width || '150px'};
  max-height: ${(p) => p.height || '150px'};
  min-height: ${(p) => p.height || '150px'};
  overflow: hidden;
`

const FileDisplayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ActionOverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translateY(-50%);
  transition: 0.2s;
`

const ActionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);

    ${ActionOverlayContent} {
      opacity: 1;
    }
  }
`

const IconContent = styled.span`
  display: inline-block;
  margin: 0 16px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: orange;
  }
`
