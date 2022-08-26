import React, { useRef } from 'react'
import { Input, InputNumber } from 'antd'
import styled, { createGlobalStyle } from 'styled-components'

type limitType = number | undefined
type TimePickerValue = [number, number, number]
type TimePickerType = 'HOUR' | 'MINUTE' | 'SECOND'
type TimePickerPlaceholder = [string, string, string]
type TimePickerMin = [limitType, limitType, limitType]
type TimePickerMax = [limitType, limitType, limitType]

interface TimePickerProps {
  value?: TimePickerValue
  onChange?: (value: TimePickerValue) => void
  placeholder?: TimePickerPlaceholder
  min?: TimePickerMin
  max?: TimePickerMax
  disabled?: boolean
}

const defaultOption = {
  min: [undefined, undefined, undefined],
  max: [undefined, undefined, undefined],
}

const TimePicker: React.FC<TimePickerProps> = ({
  value = [0, 0, 0],
  placeholder = ['', '', ''],
  onChange,
  min = defaultOption.min,
  max = defaultOption.max,
  disabled,
}) => {
  const [hour, minute, second] = value
  const [hourPlaceholder, minutePlaceholer, secondPlaceholder] = placeholder
  const [hourMin, minuteMin, secondMin] = min
  const [hourMax, minuteMax, secondMax] = max

  const hourInputRef = useRef<number>(hour)
  const minuteInputRef = useRef<number>(minute)
  const secondInputRef = useRef<number>(second)

  const onTimePickerChange = (type: TimePickerType) => (value: number) => {
    switch (type) {
      case 'HOUR':
        hourInputRef.current = value
        break
      case 'MINUTE':
        minuteInputRef.current = value
        break
      default:
      case 'SECOND':
        secondInputRef.current = value
        break
    }

    onChange?.([hourInputRef.current, minuteInputRef.current, secondInputRef.current])
  }

  return (
    <>
      <GlobalInputStyle />

      <TimePickerContainer>
        <InputNumber
          className="custom-input-number"
          defaultValue={hour}
          min={hourMin}
          max={hourMax}
          onChange={onTimePickerChange('HOUR')}
          placeholder={hourPlaceholder}
          disabled={disabled}
        />
        <ConjunctionInput placeholder=":" disabled />
        <InputNumber
          className="custom-input-number"
          defaultValue={minute}
          min={minuteMin}
          max={minuteMax}
          onChange={onTimePickerChange('MINUTE')}
          placeholder={minutePlaceholer}
          disabled={disabled}
        />
        <ConjunctionInput placeholder=":" disabled />
        <InputNumber
          className="custom-input-number"
          defaultValue={second}
          min={secondMin}
          max={secondMax}
          onChange={onTimePickerChange('SECOND')}
          placeholder={secondPlaceholder}
          disabled={disabled}
        />
      </TimePickerContainer>
    </>
  )
}

export default TimePicker

const GlobalInputStyle = createGlobalStyle`
    .custom-input-number {
        width: 100%;
        text-align:center;
        border-radius: 0;
        border: 0;
    }
`

const TimePickerContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  border: 1px solid #eee;
`

const ConjunctionInput = styled(Input)`
  text-align: center;
  min-width: 40px;
  max-width: 40px;
  pointer-events: none;
  border: 0;
  font-weight: bold;
`
