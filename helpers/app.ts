import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

import { appLocalApp } from 'utils/localService'

import type { Application, Credential } from 'graphql/graphQL-service-hook'
import { s3Url as initS3Url } from 'config'

type S3UrlEndpointType = 'PRIVATE' | 'PUBLIC'

interface AppDataStorage {
  app: Application
  credential: Credential
}

export const getAppDataFromStorage = (): AppDataStorage => {
  return JSON.parse(appLocalApp.get() as string) || {}
}

export const getS3UrlByType = (type: S3UrlEndpointType = 'PUBLIC'): string => {
  const { appConfig } = useSelector((state: RootState) => state.auth)
  let s3Url = initS3Url
  // let s3Url = ''

  if (!appConfig) {
    return s3Url
  }

  if (appConfig['S3_PRIVATE_CONFIG'] && type === 'PRIVATE') {
    s3Url = appConfig['S3_PRIVATE_CONFIG'].value.publicEndpoint || ''
  } else if (appConfig['S3_PUBLIC_CONFIG'] && type === 'PUBLIC') {
    s3Url = appConfig['S3_PUBLIC_CONFIG'].value.publicEndpoint || ''
  }

  return s3Url
}

export const withS3Url = (fileKey?: string) => {
  const s3Url = getS3UrlByType('PUBLIC')

  return `${s3Url}/${fileKey}`
}
