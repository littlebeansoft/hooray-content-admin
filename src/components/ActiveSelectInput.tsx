import { Select, Space } from 'antd'

import Label from 'components/Label'

interface ActiveFilter {
  active?: string | null | undefined
}

const { Option } = Select

interface ActiveSelectInputProps<T> {
  filter?: T
  onFilterChange?: (name: keyof T, value: string) => void
}

const ActiveSelectInput = <T extends ActiveFilter>({
  filter,
  onFilterChange,
}: ActiveSelectInputProps<T>) => {
  return (
    <Space direction="vertical" size="small">
      <Label>สถานะ</Label>
      <Select
        style={{ width: 300 }}
        defaultValue="all"
        value={filter?.active}
        onChange={(value) => onFilterChange?.('active', value)}
      >
        <Option value="all">ทั้งหมด</Option>
        <Option value="true">ใช้งาน</Option>
        <Option value="false">ไม่ใช้งาน</Option>
      </Select>
    </Space>
  )
}

export default ActiveSelectInput
