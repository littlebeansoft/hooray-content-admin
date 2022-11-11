import { message, Progress } from 'antd'
import styled from '@emotion/styled'
import { useEffectOnce } from 'react-use'

import useUploadFile from 'hooks/useUploadFileToS3'

import {
  EnumS3Acl,
  useGetS3PutObjectSignedUrlLazyQuery,
} from 'graphql/__generated/operations'

import { coreClient } from 'setup/apollo'

import useUploadContext from './context'

import type { FileListItemData } from './type'

interface UploadProgressProps {
  file: FileListItemData
}

const UploadProgress = ({ file }: UploadProgressProps) => {
  const { isUploading, updateFileListByID, onUploadStart, onUploadEnd } =
    useUploadContext()

  const { uploading, uploadPercent, uploadFileToS3 } = useUploadFile()

  const [s3PutObjectSignedURL] = useGetS3PutObjectSignedUrlLazyQuery({
    client: coreClient,
    onCompleted({ getS3PutObjectSignedUrl }) {
      if (file.rcFile == null) {
        return
      }

      const { signedUrl, fileKey } = getS3PutObjectSignedUrl.payload[0]

      uploadFileToS3(signedUrl, file.rcFile)
        .then(() => {
          updateFileListByID({
            ...file,
            fileKey,
            rcFile: undefined,
          })
        })
        .catch(() => {
          message.error('ไม่สามารถอัปโหลดรูปหรือวิดีโอได้')
        })
        .finally(() => {
          onUploadEnd()
        })
    },
    onError(error) {
      console.log(error)

      message.error('ไม่สามารถเรียกข้อมูลสำหรับการอัปโหลดรูปหรือวิดีโอได้')

      onUploadEnd()
    },
  })

  const rcFile = file.rcFile
  const name = rcFile?.name || ''
  const type = rcFile?.type || ''

  useEffectOnce(() => {
    if (file.rcFile == null) {
      return
    }

    onUploadStart()

    s3PutObjectSignedURL({
      variables: {
        inputs: [
          {
            acl: EnumS3Acl.Public,
            contentType: type,
            objectName: name,
            path: 'hooray-content/',
          },
        ],
      },
    })
  })

  if (isUploading || uploading) {
    return (
      <ProgressContainer>
        <Progress
          type="circle"
          percent={uploadPercent}
          width={60}
          strokeColor="#52c41a"
          strokeWidth={12}
        />
      </ProgressContainer>
    )
  }

  return null
}

export default UploadProgress

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0 0 0 / 0.5);
  z-index: 9;

  display: flex;
  justify-content: center;
  align-items: center;

  .ant-progress-text {
    color: #fff;
  }
`
