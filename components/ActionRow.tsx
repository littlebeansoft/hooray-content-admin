import styled from 'styled-components'

type StyleDirectionKey = 'padding' | 'margin'

interface StyleDirection {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface ActionRowContainerProps {
  padding?: StyleDirection
  margin?: StyleDirection
}

interface ActionRowProps extends ActionRowContainerProps {
  leftComponent?: React.ReactNode
  rightComponent?: React.ReactNode
}

const ActionRow: React.FC<ActionRowProps> = ({ leftComponent, rightComponent, padding, margin }) => {
  return (
    <ActionRowContainer padding={padding} margin={margin}>
      <ColLeft>{leftComponent}</ColLeft>
      {rightComponent && <ColRight>{rightComponent}</ColRight>}
    </ActionRowContainer>
  )
}

export default ActionRow

function renderStyleDirection(key: StyleDirectionKey, styleDirection?: StyleDirection) {
  const top = styleDirection?.top
  const bottom = styleDirection?.bottom
  const left = styleDirection?.left
  const right = styleDirection?.right

  return {
    [`${key}-top`]: top,
    [`${key}-bottom`]: bottom,
    [`${key}-left`]: left,
    [`${key}-right`]: right,
  }
}

const ActionRowContainer = styled.div<ActionRowContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  ${(props) => renderStyleDirection('margin', props.margin)};
  ${(props) => renderStyleDirection('padding', props.padding)};
`

const ColLeft = styled.div`
  flex: 1 1 auto;
`

const ColRight = styled.div`
  margin-left: 16px;
`
