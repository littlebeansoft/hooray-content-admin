export type LocaleTypeString = 'enUS' | 'thTH'

export type Locale = {
  [key in LocaleTypeString]: LocaleTypeString
}

export interface AppLocalName {
  accessToken: string
  refreshToken: string
  locale: string
  app: string
  version: string
}
