import React, { useCallback, useEffect, useRef, useState } from 'react'
import { message, Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'

import { useQuery, useMutation } from '@apollo/client'
import { GET_FileUpload } from 'graphql/queries'
import { CREATE_FILEUPLOAD, DELETE_FILEUPLOAD } from 'graphql/mutations'

import { s3Pathname } from 'config'

import useGetS3PutObjectSignedUrl from 'graphql/useGetS3PutObjectSignedUrl'
import FileList from './FileList'

import type { UploadFileProps } from './interface'
import type { RcFile } from 'antd/lib/upload'
import type { S3PutObjectAPIPayload } from 'graphql/useGetS3PutObjectSignedUrl/interface'

const UploadFileDocument: React.FC<UploadFileProps> = ({
  aclType,
  refId,
  isEdit,
  allowFileExtensions,
  value,
  onChange,
}) => {
  const [file, setFile] = useState<RcFile | undefined>()
  const [isUploading, setUploading] = useState(false)
  const [uploadFile, setUploadFile] = useState<S3PutObjectAPIPayload | undefined>()
  const [fileList, setFileList] = useState<any[]>([])

  const fileDataType = useRef<string>()
  const extFile = useRef<string>()

  const [createFileUpload] = useMutation(CREATE_FILEUPLOAD)
  const [deleteFileUpload] = useMutation(DELETE_FILEUPLOAD, {
    onCompleted: () => {
      refetch()
    },
  })
  const { data, refetch, loading } = useQuery(GET_FileUpload, {
    fetchPolicy: 'network-only',
    variables: {
      input: {
        filter: {
          refId,
        },
        sort: {
          CreateAt: 1,
        },
      },
    },
  })

  useEffect(() => {
    if (data && !loading) {
      setFileList(
        data?.getFileUpload.payload?.map((fileData: any) => {
          return {
            fileName: fileData?.fileName,
            fileKey: fileData?.fileKey,
            fileType: fileData.fileType,
            fileExtension: fileData.fileExtension,
          }
        })
      )
    }
  }, [data, loading])

  const s3PutObjectQuery = useGetS3PutObjectSignedUrl({
    skip: !file,
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

      setUploadFile(imageData)
    },
    onError(error) {
      message.error(error.message)

      setUploading(false)
    },
  })

  const onCreateFileUpload = useCallback(
    (fileName: string, fileKey: string) => {
      createFileUpload({
        variables: {
          input: {
            refId,
            fileKey,
            fileName,
            fileType: fileDataType.current,
            fileExtension: extFile.current,
          },
        },
      })
    },
    [createFileUpload, refId]
  )

  useEffect(() => {
    const doUploadImage = async () => {
      const headers = {
        'content-type': file?.type,
        'x-amz-acl': aclType === 'PRIVATE' ? 'private' : 'public-read',
      }

      try {
        await axios.put(String(uploadFile?.signedUrl), file, {
          headers,
        })
        onUploadSuccess()
        message.success('Upload file successfully')

        const contentFile = file?.type || ''

        if (contentFile !== '') {
          const dataSplit = contentFile.split('/')
          if (dataSplit.length > 0) {
            fileDataType.current = dataSplit[0]
            extFile.current = dataSplit[1]
          }
        }

        const fileDataList = {
          fileName: file?.name || '',
          fileKey: uploadFile?.fileKey || '',
          fileType: fileDataType,
          fileExtension: extFile,
        }

        setFileList([...fileList, fileDataList])
      } catch (error) {
        message.error('เกิดข้อผิดพลาดระหว่างการอัพโหลด')
      } finally {
        setUploading(false)
        onCreateFileUpload(file?.name || '', uploadFile?.fileKey || '')
      }
    }

    if (file && uploadFile) {
      doUploadImage()
    }
  }, [file, value, aclType, uploadFile, onChange, fileList, onCreateFileUpload])

  const onDeleteFile = (objFile: any) => {
    deleteFileUpload({
      variables: {
        refId,
        fileKey: objFile.fileKey,
      },
      onCompleted(res) {
        message.success('Delete file successfully')
      },
    })
  }

  return (
    <>
      <Upload
        accept={allowFileExtensions}
        showUploadList={false}
        beforeUpload={(file) => {
          setUploading(true)
          setFile(file)
          return false
        }}
      >
        <Button icon={<UploadOutlined />}>อัพโหลด</Button>
      </Upload>
      {fileList.length > 0 && (
        <FileList
          aclType={aclType}
          isEdit={isEdit}
          fileList={fileList}
          onRemove={(index: number) => {
            const removeImageByIndex = fileList?.filter((_, filePosition) => {
              filePosition !== index
              onDeleteFile(fileList[index])
            })

            onChange?.(removeImageByIndex)
          }}
        ></FileList>
      )}
    </>
  )

  function onUploadSuccess() {
    setFile(undefined)
    setUploadFile(undefined)
    setUploading(false)
  }
}

export default UploadFileDocument
