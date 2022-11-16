import { Tag } from 'antd'

interface ActiveStatusTagProps {
  active?: boolean
}

const ActiveStatusTag = ({ active }: ActiveStatusTagProps) => {
  const color = active ? 'success' : 'error'

  return <Tag color={color}>{active ? 'ใช้งาน' : 'ไม่ใช้งาน'}</Tag>
}

export default ActiveStatusTag
