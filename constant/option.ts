import { LeadTypeOption, LeadStatus } from "graphql/interface"

export const leadTypeOptions: LeadTypeOption[] = [
    {
        label: 'Factory',
        value: 'FACTORY',
    },
    {
        label: "Agent",
        value: "AGENT"
    },
    {
        label: "Customer",
        value: "CUSTOMER"
    },
    {
        label: "",
        value: "ORGANIZATION"
    },
    {
        label: "Retail",
        value: "RETAIL"
    },
    {
        label: "Other",
        value: "OTHER"
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