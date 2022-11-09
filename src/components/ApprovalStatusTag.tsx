import { Tag } from 'antd'

import { Status } from 'graphql/__generated/operations'

interface ApprovalStatusTagProps {
  status?: Status
}

interface Approval {
  label: string
  color: 'warning' | 'success' | 'error'
}

type ApprovalTag = Record<Status, Approval>

const ApprovalStatusTag = ({
  status = Status.Draft,
}: ApprovalStatusTagProps) => {
  const approvalTag: ApprovalTag = {
    DRAFT: {
      label: 'แบบร่าง',
      color: 'warning',
    },
    REVIEWING: {
      label: 'กำลังตรวจสอบ',
      color: 'warning',
    },
    APPROVE: {
      label: 'อนุมัติ',
      color: 'success',
    },
    REJECT: {
      label: 'ไม่อนุมัติ',
      color: 'error',
    },
    SUSPENDED: {
      label: 'ระงับ',
      color: 'error',
    },
  }

  const selectedApprovalStatus = approvalTag[status]

  return (
    <Tag color={selectedApprovalStatus.color}>
      {selectedApprovalStatus.label}
    </Tag>
  )
}

export default ApprovalStatusTag
