import { Select, Space } from 'antd'

import Label from 'components/Label'

import { Status } from 'graphql/__generated/operations'

const { Option } = Select

interface StatusFilter {
  status: string | null | undefined
}

interface ContentStatusSelectInputProps<T> {
  filter?: T
  onFilterChange?: (name: keyof T, value: string) => void
}

const ContentStatusSelectInput = <T extends StatusFilter>({
  filter,
  onFilterChange,
}: ContentStatusSelectInputProps<T>) => {
  return (
    <Space direction="vertical" size="small">
      <Label>สถานะการยืนยัน</Label>
      <Select
        style={{ width: 300 }}
        defaultValue="all"
        value={filter?.status}
        onChange={(value) => onFilterChange?.('status', value)}
      >
        <Option value="all">ทั้งหมด</Option>
        <Option value={Status.Draft}>แบบร่าง</Option>
        <Option value={Status.Reviewing}>กำลังตรวจสอบ</Option>
        <Option value={Status.Approve}>อนุมัติ</Option>
        <Option value={Status.Reject}>ไม่อนุมัติ</Option>
        <Option value={Status.Suspended}>ระงับ</Option>
      </Select>
    </Space>
  )
}

export default ContentStatusSelectInput
