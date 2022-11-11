import styled from '@emotion/styled'
import { Modal } from 'antd'

import { getFileExtensionType } from './utils'

import type { FilePreview } from './type'

interface UploadPreviewModalProps {
  preview?: FilePreview
  onCancelPreview: VoidFunction
}

const UploadPreviewModal = ({
  preview,
  onCancelPreview,
}: UploadPreviewModalProps) => {
  return (
    <Modal
      title="ตัวอย่างข้อมูลการอัปโหลด"
      open={preview?.visible}
      footer={false}
      centered
      destroyOnClose
      onCancel={onCancelPreview}
    >
      <PreviewContainer>
        {renderPreviewContentByFileType(preview?.url)}
      </PreviewContainer>
    </Modal>
  )

  function renderPreviewContentByFileType(url?: string) {
    const fileType = getFileExtensionType(url)

    switch (fileType) {
      case 'document':
        return null

      case 'video':
        return <video autoPlay controls src={url} />

      default:
      case 'image':
        return <img src={url} alt="" />
    }
  }
}

export default UploadPreviewModal

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;

  > img,
  video {
    max-width: 100%;
  }
`
