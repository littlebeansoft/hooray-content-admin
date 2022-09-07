import { ReactNode } from 'react'
import type { TableProps } from 'antd'
import { RandomStatus, StatusType } from 'graphql/interface'


export type MenuKey = 'EDIT_DETAIL' | 'EDIT_TEST' | 'REVIEW' | 'ATTENDEES' | 'ENABLED' | 'DISABLED'
export type EventMenuKey = 'DISQUALIFY' | 'CODE' | 'VIEW' | 'DELETE' | 'PRINT' | 'ENABLED' | 'DISABLED'
export type CodeMenuKey = 'CREATE_CODE' | 'UPLOAD_CODE'
export type QuestionStatus = 'ADD' | 'EDIT'
export type EFormStatus = 'ADD' | 'EDIT'
export type FormFieldStatus = 'ADD' | 'EDIT'
export type EventStatus = 'ADD' | 'EDIT'

export interface TitleComponentProps {
  title: string
  noMargin?: boolean
  onBack?: () => void
}

export interface Tab {
  key: string
  title: string
  component: ReactNode
}

export interface TabLayoutProps {
  tabs: Tab[]
  title?: string
  defaultActiveKey?: string
  cardActionButton?: ReactNode
  onChange?: (activeKey: string) => void
}

export interface TableCardProps extends TableProps<any> {
  onSearch?: (value: string) => void
  header?: ReactNode[]
  searchPlaceholder?: string,
  rowSelectAmount?: number
}

export interface ActionMenu<T> {
  key: T
  title: string
  icon?: ReactNode
}

export interface MenuData<T> {
  key: T
  value: string
}
export interface EventMenu {
  key: EventMenuKey
  value: string
  icons?: ReactNode
}
export interface CodeCreateMenu {
  key: CodeMenuKey
  value: string
}

export interface MenuInfo {
  key: string
}

export interface ListComponentProps  {
  onSearch?: (value: string) => void
  header?: ReactNode[]
  searchPlaceholder?: string
  children?: ReactNode[]
  router?: React.router,
  emptyText?: string
}
