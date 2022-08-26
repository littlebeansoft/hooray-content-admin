import { ChannelKey } from 'hooks/interface'

interface AppConfigObjectValue {
  [key: string]: string | undefined
}

interface AppConfigObject {
  configKey: string
  configName: string
  value: AppConfigObjectValue
}
export interface AppConfig {
  [key: string]: AppConfigObject
}

export interface AppToken {
  accessToken: string
  refreshToken: string
  loading?: boolean
  error?: boolean
}
export interface OrgToken {
  accessTokenOrg: string
  refreshTokenOrg: string
  loading?: boolean
  error?: boolean
}

export interface AuthInitialState {
  credentialKey: string
  appConfig: AppConfig
  appToken: AppToken
  orgToken: OrgToken
  appKey: string
  mode: string
}
