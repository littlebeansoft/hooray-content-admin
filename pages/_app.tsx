import React from 'react'
import Script from 'next/script'
import { AppProps } from 'next/app'
import { compose } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ApolloProvider } from '@apollo/client/react'
import type { ApolloClient } from '@apollo/client'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { setTokenOrgRef, setTokenAppRef } from 'redux/actios/authAction'
import setupAppLocal from 'helpers/store'
import store from 'redux/store'
import '../styles/globals.scss'
import '../styles/image_picker.scss'
import 'antd/dist/antd.css'

import '../config/i18n'

import withApollo from 'middlewares/withApollo'

import { persistor, wrapper } from 'redux/store'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

dayjs.extend(relativeTime)
dayjs.extend(duration)
dayjs.extend(utc)
dayjs.extend(timezone)

setupAppLocal()

interface AppPropsWithApollo extends AppProps {
  apollo: ApolloClient<any>
}

function MyApp({ Component, pageProps, apollo }: AppPropsWithApollo) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { appToken, orgToken, credentialKey } = router.query
  const { appToken: appTokenCurrent, orgToken: orgTokenCurrent } = store.getState().auth
  React.useEffect(() => {
    if (appToken && !appTokenCurrent.accessToken) {
      dispatch(setTokenAppRef({ appToken, credentialKey }))
    }
    if (orgToken && !orgTokenCurrent.accessTokenOrg) {
      dispatch(setTokenOrgRef({ orgToken, credentialKey }))
    }
  })

  if (!router.isReady) return <div />
  return (
    <>
      <Script src="https://kit.fontawesome.com/cc59f48154.js" crossOrigin="anonymous" />
      <ApolloProvider client={apollo}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ApolloProvider>
    </>
  )
}

export default compose(wrapper.withRedux, withApollo)(MyApp)
