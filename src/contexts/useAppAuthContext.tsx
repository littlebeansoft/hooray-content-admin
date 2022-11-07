import type { ReactNode } from 'react'

import { createContext, useContext, useState } from 'react'
import { matchPath } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

import { getCredentialKeyFromQueryString } from 'helpers/utils'

import { useGetAppAuthUserLazyQuery } from 'graphql/__generated/operations'

import { accessToken, app, refreshToken } from 'services/localStorage'

import { coreClient } from 'setup/apollo'

import type {
  QR_GetAppByCredentialResult,
  QR_GetTokenAuthCodeResult,
} from 'graphql/queryResponseTypes'

type AppAuthToken = QR_GetTokenAuthCodeResult['token']

interface AppAuthContextData {
  token?: AppAuthToken
  appInfo?: QR_GetAppByCredentialResult
}

interface AppAuthProviderProps {
  children: ReactNode
}

const AppAuthContext = createContext<any>(null)

export const AppAuthProvider = ({ children }: AppAuthProviderProps) => {
  const appMatchPath = matchPath(
    {
      path: '/app/:ref',
      end: false,
    },
    window.location.pathname
  )

  const [token, setToken] = useState<AppAuthToken>()
  const [appInfo, setAppInfo] = useState<QR_GetAppByCredentialResult>()

  const [appAuthUser] = useGetAppAuthUserLazyQuery({
    client: coreClient,
    onCompleted({ getAppByCredential, getTokenAuthCode }) {
      const { token } = getTokenAuthCode.payload

      const appResult = getAppByCredential.payload

      accessToken.set(token.accessToken)
      refreshToken.set(token.accessToken)

      app.set(appResult)

      setToken(token)
      setAppInfo(appResult)
    },
  })

  const value: AppAuthContextData = {
    token,
    appInfo,
  }

  useEffectOnce(() => {
    const appRef = appMatchPath?.params.ref

    const credentialKey = getCredentialKeyFromQueryString()

    if (appRef == null || credentialKey == null) {
      return
    }

    appAuthUser({
      variables: {
        code: appRef,
        credentialKey,
      },
    })
  })

  return (
    <AppAuthContext.Provider value={value}>{children}</AppAuthContext.Provider>
  )
}

const useAppAuth = () => useContext<AppAuthContextData>(AppAuthContext)

export default useAppAuth
