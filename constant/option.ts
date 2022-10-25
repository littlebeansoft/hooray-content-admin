import { LeadTypeOption, LeadStatus, AccountTypeOption } from 'graphql/interface'

export const leadTypeOptions: LeadTypeOption[] = [
  {
    label: 'Factory',
    value: 'FACTORY',
    text: 'โรงงาน',
  },
  {
    label: 'Agent',
    value: 'AGENT',
    text: 'เอเจน',
  },
  {
    label: 'Customer',
    value: 'CUSTOMER',
    text: 'ลูกค้า',
  },
  {
    label: 'Organization',
    value: 'ORGANIZATION',
    text: 'องค์กร',
  },
  {
    label: 'Retail',
    value: 'RETAIL',
    text: 'ขายปลีก',
  },
  {
    label: 'Other',
    value: 'OTHER',
    text: 'อื่นๆ',
  },
]

export const accountTypeOptions: AccountTypeOption[] = [
  {
    label: 'Approved',
    value: 'APPROVED',
    text: 'Approved',
  },
  {
    label: 'Blocked',
    value: 'BLOCKED',
    text: 'Blocked',
  },
  {
    label: 'Closed',
    value: 'CLOSED',
    text: 'Closed',
  },
  {
    label: 'Closed',
    value: 'DECLINED',
    text: 'Closed',
  },
  {
    label: 'Need More Info',
    value: 'NEED_MORE_INFORMATION',
    text: 'Need More Info',
  },
  {
    label: 'Preparing',
    value: 'PREPARING',
    text: 'Preparing',
  },
  {
    label: 'Reviewing',
    value: 'REVIEWING',
    text: 'Reviewing',
  },
  {
    label: 'Suspended',
    value: 'SUSPENDED',
    text: 'Suspended',
  },
]

export const leadStatusOptions: LeadStatus[] = [
  {
    label: 'Normal',
    value: 'NORMAL',
  },
  {
    label: 'Qualify',
    value: 'QUALIFY',
  },
  {
    label: 'Disqualify',
    value: 'DISQUALIFY',
  },
]

export const STATUS = { ACTIVE: 'ACTIVE', INACTIVE: 'INACTIVE' }
