import { LeadTypeOption, LeadStatus } from "graphql/interface"

export const leadTypeOptions: LeadTypeOption[] = [
    {
        label: 'Factory',
        value: 'FACTORY',
        text: 'โรงงาน'
    },
    {
        label: "Agent",
        value: "AGENT",
        text: "เอเจน"
    },
    {
        label: "Customer",
        value: "CUSTOMER",
        text: "ลูกค้า"
    },
    {
        label: "Organization",
        value: "ORGANIZATION",
        text: "องค์กร"
    },
    {
        label: "Retail",
        value: "RETAIL",
        text: "ขายปลีก"
    },
    {
        label: "Other",
        value: "OTHER",
        text: "อื่นๆ"
    }
]

export const leadStatusOptions: LeadStatus[] = [
    {
        label: "Normal",
        value: "NORMAL"
    },
    {
        label: "Qualify",
        value: "QUALIFY"
    },
    {
        label: "Disqualify",
        value: "DISQUALIFY"
    }
]