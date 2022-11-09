import { generatePath } from 'react-router-dom'
import humanizeDuration from 'humanize-duration'

import { stringify, ParsedQuery } from 'query-string'
import { tokenRef } from 'services/localStorage'

interface RouteToOptions {
  params?: Record<string, string>
  query?: ParsedQuery
}

export const getSearchParams = () => {
  return new URLSearchParams(window.location.search)
}

export const getCredentialKeyFromQueryString = () => {
  return getSearchParams().get('credentialKey')
}

export const routeTo = (path: string, options?: RouteToOptions) => {
  const pathname = generatePath(path, {
    ...options?.params,
    ref: tokenRef.get(),
  })

  const query = {
    ...options?.query,
    credentialKey: getCredentialKeyFromQueryString(),
  }

  return `${pathname}?${stringify(query)}`
}

export const getActiveBooleanValue = (
  active?: string | null
): boolean | undefined => {
  if (active == null || active === 'all') {
    return undefined
  }

  if (active === 'true') {
    return true
  }

  return false
}

const defaultDurationTimeFormatOptions: humanizeDuration.Options = {
  language: 'th',
}

export const videoDurationTimeFormat = (
  time: number,
  options: humanizeDuration.Options = defaultDurationTimeFormatOptions
) => {
  return humanizeDuration(time * 1000, {
    delimiter: ' ',
    ...options,
  })
}
