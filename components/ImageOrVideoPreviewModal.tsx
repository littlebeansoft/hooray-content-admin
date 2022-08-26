import React, { useCallback, useEffect, useState } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'

import PreviewVideo from './PreviewVideo'

import { isVideoSource } from 'helpers/formatter'

interface ImagePreviewModalProps {
  src: string
  visible: boolean
  onCancel: () => void
  minWidth: number
}

interface VideoElement {
  videoWidth: number
  videoHeight: number
}

const _modalPadding = 24 * 2

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({ src, visible, onCancel, minWidth }) => {
  const [videoElement, setVideoElement] = useState<VideoElement | undefined>()
  const [modalWidth, setModalWidth] = useState(520)

  const setModalWidthWithPadding = useCallback(
    (elementWidth) => {
      const width = elementWidth + _modalPadding

      setModalWidth(width < minWidth ? minWidth : width)
    },
    [minWidth]
  )

  const handleOnLoadedMetaData = useCallback(
    (event) => {
      const { videoWidth, videoHeight } = event.target

      setModalWidthWithPadding(calculateWidthByScreen(videoWidth, videoHeight))
      setVideoElement(event.target)
    },
    [setModalWidthWithPadding]
  )

  useEffect(() => {
    if (!src || !visible) {
      return
    }

    if (!isVideoSource(src)) {
      const img = new Image()

      img.src = src
      img.onload = () => {
        setModalWidthWithPadding(calculateWidthByScreen(img.width, img.height))
      }
    } else {
      videoElement &&
        setModalWidthWithPadding(calculateWidthByScreen(videoElement.videoWidth, videoElement.videoHeight))
    }
  }, [src, visible, videoElement, setModalWidthWithPadding])

  return (
    <Modal
      width={modalWidth}
      visible={visible}
      centered
      onCancel={onCancel}
      footer={null}
      closable={false}
      destroyOnClose
    >
      <Content>{renderModalContent()}</Content>
    </Modal>
  )

  function renderModalContent() {
    if (isVideoSource(src)) {
      return <PreviewVideo src={src} controls onLoadedMetaData={handleOnLoadedMetaData} />
    }

    /**
     * Have to ignore for this case because we can't use `next/image` for some reason about domain names are dynamic.
     */
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" />
  }

  function calculateWidthByScreen(elementWidth: number, elementHeight: number, scale = 80) {
    if (elementHeight > window.innerHeight) {
      const shouldHeight = (window.innerHeight / 100) * scale
      const ratio = (shouldHeight / elementHeight) * 100
      const widthByRatio = Math.round((elementWidth / 100) * ratio)

      return widthByRatio
    } else if (elementWidth > window.innerWidth) {
      return Math.round((window.innerWidth / 100) * scale)
    } else {
      return elementWidth
    }
  }
}

export default ImagePreviewModal

const Content = styled.div`
  text-align: center;

  > img {
    max-width: 100%;
  }
`
