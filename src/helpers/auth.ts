import type { LoaderFunctionArgs } from 'react-router-dom'

import { getSearchParams } from './utils'

export const isValidURL = ({ params }: LoaderFunctionArgs) => {
  const searchParams = getSearchParams()

  const credentialKey = searchParams.get('credentialKey')

  if (params.ref == null || credentialKey == null) {
    throw Error()
  }

  return
}
