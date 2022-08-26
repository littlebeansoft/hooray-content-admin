import React, { useState } from 'react'

import { Card, Col, Popconfirm, Row, Tooltip } from 'antd'
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons'

import { useQuery } from '@apollo/client'
import S3_GET_OBJECT_SIGNED_URL from 'graphql/useGetS3SignedUrl/s3GetObjectSignedUrl'

import type { FileListProps } from './interface'
import { API } from 'config/api'

const FileList: React.FC<FileListProps> = ({ isEdit, fileList, onRemove, children }) => {
  const [fileKey, setFileKey] = useState('')

  useQuery(S3_GET_OBJECT_SIGNED_URL, {
    fetchPolicy: 'network-only',
    variables: {
      fileKeys: fileKey,
    },
    context: {
      uri: API.CORE.GRAPHQL.ADMIN['1.0'],
    },
    onCompleted(res) {
      if (fileKey) {
        window.open(res.getS3GetObjectSignedUrl?.payload[0]?.signedUrl || '', '_blank')
      }
    },
  })

  const onClickByFileKey = (fileKey: string) => {
    setFileKey(fileKey)
  }

  return (
    <>
      <div style={{ marginTop: 15 }}>
        {fileList &&
          fileList.length > 0 &&
          fileList.map((file: any, index: number) => {
            return (
              <Card style={{ marginTop: 5 }} key={index}>
                <Row>
                  <Col span={23} onClick={() => onClickByFileKey(file.fileKey)}>
                    {file.fileType === 'image' ? <FileImageOutlined /> : <FileOutlined />}
                    &nbsp;&nbsp;{file.fileName}
                  </Col>
                  <Col span={1}>
                    <Tooltip placement="top" title={''}>
                      {isEdit && (
                        <Popconfirm title="คุณแน่ใจที่จะลบไหม?" onConfirm={() => onRemove?.(index)}>
                          <DeleteOutlined />
                        </Popconfirm>
                      )}
                    </Tooltip>
                  </Col>
                </Row>
              </Card>
            )
          })}
        {isEdit && children}
      </div>
    </>
  )
}

export default FileList
