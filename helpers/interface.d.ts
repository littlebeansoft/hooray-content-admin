import { NextRouter } from 'next/router'

export type statusType = 'ADD' | 'EDIT'
export interface QueryStatusType {
  [key: statusType]: string
}

export interface SetQueryStatus {
  router: NextRouter
  queryStatus: QueryStatusType
  anotherQuery?: any
  pathname?: string
}
