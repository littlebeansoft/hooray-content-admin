import { Popconfirm, Space } from 'antd'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

import useUploadContext from './context'

import { getFileExtensionType } from './utils'

import type { FileListItemData } from './type'

interface ActionMenuProps {
  file: FileListItemData
}

const ActionMenu = ({ file }: ActionMenuProps) => {
  const { onDelete, onPreview } = useUploadContext()

  return (
    <ActionMenuContainer className="upload-image-and-vide-action-menu-container">
      <Space size="middle">
        <Popconfirm title="ต้องการลบหรือไม่?" onConfirm={() => onDelete(file)}>
          <MenuItem>
            <DeleteOutlined />
          </MenuItem>
        </Popconfirm>

        <MenuItem>
          <EyeOutlined
            onClick={() => {
              const fileType = getFileExtensionType(file.url)

              if (fileType === 'document') {
                window.open(file.url, '_blank')

                return
              }

              onPreview(file)
            }}
          />
        </MenuItem>
      </Space>
    </ActionMenuContainer>
  )
}

export default ActionMenu

const ActionMenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0;

  &:hover {
    + .upload-image-and-video-overlay {
      opacity: 1;
    }
  }
`

const MenuItem = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`
