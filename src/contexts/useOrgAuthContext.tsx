import type { ReactNode } from 'react'

import { createContext, useContext, useState } from 'react'
import { matchPath } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

import { getCredentialKeyFromQueryString } from 'helpers/utils'

import { useGetOrgAuthUserLazyQuery } from 'graphql/__generated/operations'

import { accessToken, app, refreshToken } from 'services/localStorage'

import { coreClient } from 'setup/apollo'

import type {
  QR_GetAppByCredentialResult,
  QR_GetOrgAccessTokenWithRefResult,
} from 'graphql/queryResponseTypes'

type OrgAuthToken = QR_GetOrgAccessTokenWithRefResult['token']

interface OrgAuthContextData {
  token?: OrgAuthToken
  appInfo?: QR_GetAppByCredentialResult
}

interface OrgAuthProviderProps {
  children: ReactNode
}

const OrgAuthContext = createContext<any>(null)

export const OrgAuthProvider = ({ children }: OrgAuthProviderProps) => {
  const orgMatchPath = matchPath(
    {
      path: '/org/:ref',
      end: false,
    },
    window.location.pathname
  )

  const [token, setToken] = useState<OrgAuthToken>()
  const [appInfo, setAppInfo] = useState<QR_GetAppByCredentialResult>()

  const [orgAuthUser] = useGetOrgAuthUserLazyQuery({
    client: coreClient,
    onCompleted({ getOrgAccessTokenWithRef, getAppByCredential }) {
      const { token } = getOrgAccessTokenWithRef.payload

      const appResult = getAppByCredential.payload

      accessToken.set(token.orgAccessToken)
      refreshToken.set(token.orgRefreshToken)

      app.set(appResult)

      setToken(token)
      setAppInfo(appResult)
    },
  })

  const value: OrgAuthContextData = {
    token,
    appInfo,
  }

  useEffectOnce(() => {
    const orgRef = orgMatchPath?.params.ref

    const credentialKey = getCredentialKeyFromQueryString()

    if (orgRef == null || credentialKey == null) {
      return
    }

    orgAuthUser({
      variables: {
        tokenRef: orgRef,
        credentialKey,
      },
    })
  })

  return (
    <OrgAuthContext.Provider value={value}>{children}</OrgAuthContext.Provider>
  )
}

const useOrgAuth = () => useContext<OrgAuthContextData>(OrgAuthContext)

export default useOrgAuth
