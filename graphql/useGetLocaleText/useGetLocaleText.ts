import { useQuery } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './getLocaleText'

import type { GraphQLServiceQueryHook } from '../graphQL-service-hook'
import type { LocaleText, LocaleTextVars } from './interface'

const useGetLocaleText: GraphQLServiceQueryHook<LocaleText, LocaleTextVars> = (options) => {
  return useQuery(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useGetLocaleText
