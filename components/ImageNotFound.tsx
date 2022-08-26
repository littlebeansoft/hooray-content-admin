import React from 'react'
import { Space } from 'antd'
import styled from 'styled-components'

import FontAwesomeIcon from 'components/FontAwesomeIcon'

const ImageNotFound: React.FC = () => {
  return (
    <ImageWrapper>
      <Space direction="vertical" size={8} align="center">
        <FontAwesomeIcon iconName="image" size="lg" />
      </Space>
    </ImageWrapper>
  )
}

export default ImageNotFound

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 150px;
  max-width: 100%;
  max-height: 150px;
  background: rgb(0 0 0 / 0.2);
`
