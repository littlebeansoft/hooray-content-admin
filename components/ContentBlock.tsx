import type { FC } from 'react'

import { Card } from 'antd'
import styled from 'styled-components'

interface ContentBlockComponentProps {
  Title: FC<any>
  SubTitle: FC<any>
}

interface Props {
  loading?: boolean
}

const ContentBlock: React.FC<Props> & ContentBlockComponentProps = ({ children, loading = false }) => {
  return <Content loading={loading}>{children}</Content>
}

export default ContentBlock

const Title = styled.h2`
  display: block;
  margin: 0 0 32px 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 1em;
`

const SubTitle = styled.h3`
  display: block;
  margin: 0 0 16px 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 1em;
`

const Content = styled(Card)`
  border: 1px solid #eee;
  box-shadow: 0 10px 20px #eee;
  margin-top: 16px;
  margin-bottom: 32px;
  height: auto;
  width: 100%;
`

ContentBlock.Title = Title
ContentBlock.SubTitle = SubTitle
