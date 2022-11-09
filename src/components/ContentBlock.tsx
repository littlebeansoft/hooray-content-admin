import type { ReactNode } from 'react'

import styled from '@emotion/styled'

interface ContentBlockProps {
  title: ReactNode
  extra?: ReactNode
  children: ReactNode
}

const ContentBlock = ({ title, extra, children }: ContentBlockProps) => {
  return (
    <>
      <TitleContainer>
        <Title>{title}</Title>
        {extra}
      </TitleContainer>

      <ContentBlockContainer>{children}</ContentBlockContainer>
    </>
  )
}

export default ContentBlock

const ContentBlockContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #fff;
  margin-bottom: 16px;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 0;
`

ContentBlock.Title = Title
