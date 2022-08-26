import React, { useEffect, useState } from 'react'
import { message, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import styled from 'styled-components'

import { s3Pathname } from 'config'

import ImageOrVideoPreviewModal from 'components/ImageOrVideoPreviewModal'
import FileList from './FileList'
import useGetS3PutObjectSignedUrl from 'graphql/useGetS3PutObjectSignedUrl'

import type { RcFile } from 'antd/lib/upload'
import type { S3PutObjectAPIPayload } from 'graphql/useGetS3PutObjectSignedUrl/interface'
import type { UploadImageProps } from './interface'

const UploadImage: React.FC<UploadImageProps> = ({
  disabled,
  aclType,
  isEdit,
  allowFileExtensions,
  maximumUploadItems,
  value,
  onChange,
}) => {
  const [file, setFile] = useState<RcFile | undefined>()
  const [previewImageModal, setPreviewImageModal] = useState(false)
  const [isImageUploading, setImageUploading] = useState(false)
  const [uploadImage, setUploadImage] = useState<S3PutObjectAPIPayload | undefined>()
  const [previewImageSource, setPreviewImageSource] = useState('')

  const isReachMaximumUploadItems = value && maximumUploadItems && value.length >= maximumUploadItems
  const shouldDisplayUploadButton = !isReachMaximumUploadItems

  const s3PutObjectQuery = useGetS3PutObjectSignedUrl({
    skip: !file,
    fetchPolicy: 'no-cache',
    variables: {
      userId: '',
      inputs: [
        {
          acl: aclType || 'PUBLIC',
          contentType: file?.type,
          objectName: file?.name,
          path: s3Pathname,
        },
      ],
    },
    notifyOnNetworkStatusChange: true,
    onCompleted(resp) {
      const imageData = resp.getS3PutObjectSignedUrl.payload[0]

      setUploadImage(imageData)
    },
    onError(error) {
      //not use current
      // onDefaultErrorMessage(error)

      message.error('เกิดข้อผิดพลาดระหว่างระอัพโหลด โปรดลองใหม่อีกครั้ง')

      setFile(undefined)
      setImageUploading(false)
    },
  })

  useEffect(() => {
    const doUploadImage = async () => {
      const headers = {
        'content-type': file?.type,
        'x-amz-acl': aclType === 'PRIVATE' ? 'private' : 'public-read',
      }

      try {
        await axios.put(String(uploadImage?.signedUrl), file, {
          headers,
        })

        onUploadSuccess()

        onChange?.((value || []).concat([String(uploadImage?.fileKey)]))
      } catch (error) {
        // message.error('เกิดข้อผิดพลาดระหว่างการอัพโหลด')
        console.error('เกิดข้อผิดพลาดระหว่างการอัพโหลด')
      } finally {
        setImageUploading(false)
      }
    }

    if (file && uploadImage) {
      doUploadImage()
    }
  }, [file, value, aclType, uploadImage, onChange])

  const isLoading = s3PutObjectQuery.loading || isImageUploading

  return (
    <>
      <FileList
        aclType={aclType}
        isEdit={isEdit}
        fileList={value}
        onPreview={(src) => {
          setPreviewImageModal(true)
          setPreviewImageSource(src)
        }}
        onRemove={(index) => {
          const removeImageByIndex = value?.filter((_, imagePosition) => imagePosition !== index)

          onChange?.(removeImageByIndex)
        }}
      >
        <Upload
          disabled={disabled}
          accept={allowFileExtensions}
          showUploadList={false}
          beforeUpload={(file) => {
            setImageUploading(true)
            setFile(file)

            return false
          }}
        >
          {shouldDisplayUploadButton && (
            <UploadContainer disabled={disabled}>
              {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>อัพโหลด</div>
            </UploadContainer>
          )}
        </Upload>
      </FileList>

      <ImageOrVideoPreviewModal
        minWidth={520}
        visible={previewImageModal}
        src={previewImageSource}
        onCancel={() => {
          setPreviewImageModal(false)
          setPreviewImageSource('')
        }}
      />
    </>
  )

  function onUploadSuccess() {
    setFile(undefined)
    setUploadImage(undefined)
    setImageUploading(false)
  }
}

export default UploadImage

const UploadContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed #999;
  max-width: 150px;
  min-width: 150px;
  max-height: 150px;
  min-height: 150px;
  cursor: pointer;
  transition: 0.15s all ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : null)};
  background: ${({ disabled }) => (disabled ? '#f5f5f5' : null)};
  color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.25)' : null)};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`
