import { app } from 'services/localStorage'

import type { QR_GetAppByCredentialResult } from 'graphql/queryResponseTypes'

export const getAppDataFromStorage = () => {
  const data = app.get()

  if (data == null) {
    return
  }

  return data as QR_GetAppByCredentialResult
}

export const getS3PublicURL = () => {
  const listConfigurations = getAppDataFromStorage()?.app.configurationList

  let s3URL = ''

  listConfigurations?.forEach((config) => {
    if (config.configKey === 'S3_PUBLIC_CONFIG') {
      s3URL = config.value.publicEndpoint

      return
    }
  })

  return s3URL
}

export const withS3URL = (fileKey = '') => {
  const url = getS3PublicURL()

  return `${url}/${fileKey}`
}

export const getTinyEditorAPIKey = () => {
  const listConfigurations = getAppDataFromStorage()?.app.configurationList

  let apiKey = ''

  listConfigurations?.forEach((config) => {
    if (config.configKey === 'TINY_EDITOR') {
      apiKey = config.value.apiKey

      return
    }
  })

  return apiKey
}
