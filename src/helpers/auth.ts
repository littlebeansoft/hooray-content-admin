import type { LoaderFunctionArgs } from 'react-router-dom'

import { accessToken, app, refreshToken, tokenRef } from 'services/localStorage'

import { coreClient } from 'setup/apollo'

import { getSearchParams } from './utils'

import {
  GetAppAuthUserDocument,
  GetAppAuthUserQuery,
  GetAppAuthUserQueryVariables,
  GetOrgAuthUserDocument,
  GetOrgAuthUserQuery,
  GetOrgAuthUserQueryVariables,
} from 'graphql/__generated/operations'

export const checkValidURL = (ref?: string) => {
  const searchParams = getSearchParams()

  const credentialKey = searchParams.get('credentialKey')

  if (ref == null || credentialKey == null) {
    throw Error()
  }

  return {
    ref,
    credentialKey,
  }
}

export const orgAuthValidUser = async ({ params }: LoaderFunctionArgs) => {
  const { credentialKey, ref } = checkValidURL(params.ref)

  try {
    const { data } = await coreClient.query<
      GetOrgAuthUserQuery,
      GetOrgAuthUserQueryVariables
    >({
      query: GetOrgAuthUserDocument,
      variables: {
        tokenRef: ref,
        credentialKey,
      },
    })

    const { token } = data.getOrgAccessTokenWithRef.payload

    const appResult = data.getAppByCredential.payload

    accessToken.set(token.orgAccessToken)
    refreshToken.set(token.orgRefreshToken)

    tokenRef.set(ref)

    app.set(appResult)
  } catch (error) {
    console.log('Error from org auth user', error)

    throw Error()
  }
}

export const appAuthValidUser = async ({ params }: LoaderFunctionArgs) => {
  const { credentialKey, ref } = checkValidURL(params.ref)

  try {
    const { data } = await coreClient.query<
      GetAppAuthUserQuery,
      GetAppAuthUserQueryVariables
    >({
      query: GetAppAuthUserDocument,
      variables: {
        code: ref,
        credentialKey,
      },
    })

    const { token } = data.getTokenAuthCode.payload

    const appResult = data.getAppByCredential.payload

    accessToken.set(token.accessToken)
    refreshToken.set(token.refreshToken)

    tokenRef.set(ref)

    app.set(appResult)
  } catch (error) {
    console.log('Error from app auth user', error)

    throw Error()
  }
}
