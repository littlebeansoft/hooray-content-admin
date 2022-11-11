import { PlusOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

interface UploadButtonProps {
  hide?: boolean
}

const UploadButton = ({ hide }: UploadButtonProps) => {
  return (
    <UploadButtonContainer hide={hide}>
      <UploadButtonIconContainer>
        <PlusOutlined />
      </UploadButtonIconContainer>

      <UploadButtonText>อัปโหลด</UploadButtonText>
    </UploadButtonContainer>
  )
}

export default UploadButton

const UploadButtonContainer = styled.div<Pick<UploadButtonProps, 'hide'>>`
  width: 100px;
  height: 100px;
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed rgb(204, 204, 204);
  background-color: rgb(250, 250, 250);
  color: #404040;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`

const UploadButtonIconContainer = styled.div`
  font-size: 20px;
`

const UploadButtonText = styled.span`
  font-size: 12px;
`
