import { NextRouter } from 'next/router'
import { QueryStatusType, SetQueryStatus } from './interface'

export const questionStatus = {
  ADD: { questionStatus: 'ADD' },
  EDIT: { questionStatus: 'EDIT' },
}
export const eformStatus = {
  ADD: { eformStatus: 'ADD' },
  EDIT: { eformStatus: 'EDIT' },
}
export const formFieldStatus = {
  ADD: { formFieldStatus: 'ADD' },
  EDIT: { formFieldStatus: 'EDIT' },
}
export const eventStatus = {
  ADD: { eventStatus: 'ADD' },
  EDIT: { eventStatus: 'EDIT' },
}

const setQueryStatus = ({ router, queryStatus, anotherQuery, pathname }: SetQueryStatus) => {
  if (!anotherQuery) anotherQuery = {}
  router.push({ pathname, query: { ...router.query, ...anotherQuery, ...queryStatus } })
}

export default setQueryStatus
