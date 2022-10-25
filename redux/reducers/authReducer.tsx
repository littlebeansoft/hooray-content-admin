/* eslint-disable no-case-declarations */
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  STORE_TOKEN_APP,
  CLEAR_TOKEN,
  STORE_TOKEN_ORG,
  REFRESH_TOKEN_ORG,
  REFRESH_TOKEN_APP,
  SET_MODE,
} from '../types/auth'
import { AuthInitialState } from './inteface'

const INITIAL_STATE: AuthInitialState = {
  credentialKey: '',
  appConfig: {},
  appKey: '',
  mode: '',
  appToken: {
    accessToken: '',
    refreshToken: '',
    loading: true,
    error: undefined,
  },
  orgToken: {
    accessTokenOrg: '',
    refreshTokenOrg: '',
    loading: true,
    error: undefined,
  },
}

const authReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  const appConfigObject: any = {}
  switch (type) {
    default:
      return state
    case STORE_TOKEN_APP:
      payload?.appConfig?.forEach((appConfig: any) => {
        appConfigObject[appConfig.configKey] = appConfig
      })
      return {
        ...state,
        appConfig: appConfigObject,
        appKey: payload.appKey,
        appToken: {
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
          loading: payload.loading,
          error: payload.error,
        },
      }
    case STORE_TOKEN_ORG:
      payload?.appConfig?.forEach((appConfig: any) => {
        appConfigObject[appConfig.configKey] = appConfig
      })
      return {
        ...state,
        credentialKey: payload.credentialKey,
        appConfig: appConfigObject,
        appKey: payload.appKey,
        orgToken: {
          accessTokenOrg: payload.accessTokenOrg,
          refreshTokenOrg: payload.refreshTokenOrg,
          loading: payload.loading,
          error: false,
          //bypass
          // error: payload.error,
        },
      }

    case REFRESH_TOKEN_ORG:
      return {
        ...state,
        orgToken: {
          accessTokenOrg: payload.accessTokenOrg,
          refreshTokenOrg: payload.refreshTokenOrg,
        },
      }

    case REFRESH_TOKEN_APP:
      return {
        ...state,
        appToken: {
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        },
      }
    case SET_MODE:
      return {
        ...state,
        mode: payload,
      }
    case CLEAR_TOKEN:
      return {
        ...state,
        token: '',
      }
  }
}

const persistConfig = {
  key: 'auth',
  storage,
  blacklist:
    // process.env.NEXT_PUBLIC_DEVELOP !== 'DEVELOP'
    //     ?
    ['appToken', 'orgToken', 'appConfig', 'credentialKey', 'mode'],
  // : []
}
//backlist tokenด้วย

export default persistReducer(persistConfig, authReducer)
