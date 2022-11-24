import { Tag } from 'antd'

import { EnumVerifyStatus } from 'graphql/__generated/operations'

interface VerifyTagStatusProps {
  status?: EnumVerifyStatus
}

const VerifyTagStatus = ({ status }: VerifyTagStatusProps) => {
  const isVerify = status === EnumVerifyStatus.Verified

  return (
    <Tag color={isVerify ? 'success' : 'error'}>
      {isVerify ? 'ยีนยันแล้ว' : 'ยังไม่ได้ยืนยัน'}
    </Tag>
  )
}

export default VerifyTagStatus
