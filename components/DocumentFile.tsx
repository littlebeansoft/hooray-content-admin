import React from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from 'components/FontAwesomeIcon'
import { Space, Typography } from 'antd'

interface DocumetFileProps {
  src: string
}

interface DocumentStyle {
  color: string
  iconName: string
}

const DocumentFile: React.FC<DocumetFileProps> = ({ src }) => {
  const fileType = src.split('.').slice(-1)[0].toLowerCase()
  const fileName = src.split('/').slice(-1)[0]

  const { color, iconName } = getCustomDocumentStyle()

  return (
    <DocumentFileWrapper color={color}>
      <Space direction="vertical" size={8} align="center">
        <FontAwesomeIcon iconName={iconName} style={{ fontSize: 54, color }} />
        <div style={{ textAlign: 'center' }}>
          <Typography.Text type="secondary" ellipsis style={{ maxWidth: '50%' }}>
            {fileName}
          </Typography.Text>
        </div>
      </Space>
    </DocumentFileWrapper>
  )

  function getCustomDocumentStyle(): DocumentStyle {
    switch (fileType) {
      default:
      case 'pdf':
        return {
          color: 'rgb(233 83 64)',
          iconName: 'file-pdf',
        }
      case 'doc':
      case 'docx':
        return {
          color: 'rgb(23 87 183)',
          iconName: 'file-word',
        }
      case 'ppt':
      case 'pptx':
        return {
          color: 'rgb(202 66 35)',
          iconName: 'file-powerpoint',
        }
      case 'xls':
      case 'xlsx':
        return {
          color: 'rgb(22 130 74)',
          iconName: 'file-excel',
        }
    }
  }
}

export default DocumentFile

const DocumentFileWrapper = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: ${(props) => `2px dashed ${props.color}`};
`
