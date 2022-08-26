import { Steps } from 'antd'
import styled from 'styled-components'

import FullWidthSpace from 'components/FullWidthSpace'

export interface StepData {
  title: string
  content: React.ReactNode
}

interface ProgressStepRenderProps {
  currentStepKey: number
  listStep: StepData[]
}

const { Step } = Steps

const ProgressStepRender: React.FC<ProgressStepRenderProps> = ({ currentStepKey, listStep }) => {
  const first = listStep.slice(0, 5)
  const second = listStep.slice(5)

  return (
    <FullWidthSpace direction="vertical">
      <FullWidthSpace direction="vertical" size="large">
        <StyledSteps current={currentStepKey} progressDot>
          {first.map((item, index) => {
            //console.log(index)

            return <Step {...item} key={index} />
          })}
        </StyledSteps>

        <StyledSteps current={currentStepKey} progressDot initial={first.length}>
          {second.map((item, index) => {
            // console.log(index + first.length)

            return <Step {...item} key={index + first.length} />
          })}
        </StyledSteps>
      </FullWidthSpace>

      <ProgressRenderContainer>{listStep[currentStepKey].content}</ProgressRenderContainer>
    </FullWidthSpace>
  )
}

export default ProgressStepRender

const ProgressRenderContainer = styled.div`
  margin-top: 16px;
  width: 100%;
`

const StyledSteps = styled(Steps)`
  padding: 16px 0;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
