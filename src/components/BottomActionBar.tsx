import styled from '@emotion/styled'

const BottomActionBar = styled.div<{ visible?: boolean }>`
  width: 100%;
  position: fixed;
  z-index: 3;
  bottom: ${({ visible }) => (visible ? '0px' : '-72px')};
  right: 0;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  min-height: 72px;
  background-color: #fff;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.05);
  transition: 0.25s;
`

export default BottomActionBar
