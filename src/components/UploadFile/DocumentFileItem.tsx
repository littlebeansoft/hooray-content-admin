import { Typography } from 'antd'
import styled from '@emotion/styled'
import {
  FileExcelOutlined,
  FileOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileWordOutlined,
} from '@ant-design/icons'

import { getFileExtension } from './utils'

import type { FileListItemData } from './type'

interface DocumentFileItemProps {
  file: FileListItemData
}

const { Text } = Typography

const DocumentFileItem = ({ file }: DocumentFileItemProps) => {
  const { icon, color } = getIconByFileType(file)

  return (
    <Container color={color}>
      {icon}
      <Text className="file-name" ellipsis>
        {file.alt}
      </Text>
    </Container>
  )
}

export default DocumentFileItem

const Container = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border: ${({ color }) => `1px dashed ${color}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;

  > .file-name {
    margin: 0;
    font-size: 12px;
    color: #999;
  }
`

const getIconByFileType = (file: FileListItemData) => {
  const extension = getFileExtension(file)

  switch (extension) {
    case 'pdf':
      return {
        icon: <FilePdfOutlined style={{ fontSize: 36, color: '#FA0F00' }} />,
        color: '#FA0F00',
      }

    case 'xlsx':
    case 'xls':
    case 'csv':
      return {
        icon: <FileExcelOutlined style={{ fontSize: 36, color: '#1D6F42' }} />,
        color: '#1D6F42',
      }

    case 'doc':
    case 'docx':
      return {
        icon: <FileWordOutlined style={{ fontSize: 36, color: '#1249ae' }} />,
        color: '#1249ae',
      }

    case 'ppt':
    case 'pptx':
      return {
        icon: <FilePptOutlined style={{ fontSize: 36, color: '#D04423' }} />,
        color: '#D04423',
      }

    default:
      return {
        icon: <FileOutlined />,
        color: '#CCCCCC',
      }
  }
}
