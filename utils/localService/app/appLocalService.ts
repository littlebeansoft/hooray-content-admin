import localServiceHanlder, { withLocalPrefix } from '../localService'

import type { AppLocalName, Locale } from './interface'

const currentVersion = '1.2'

const localName: AppLocalName = {
  accessToken: withLocalPrefix('accessToken'),
  refreshToken: withLocalPrefix('refreshToken'),
  locale: withLocalPrefix('locale'),
  app: withLocalPrefix('app'),
  version: withLocalPrefix('version'),
}

export const localeCode: Locale = {
  enUS: 'enUS',
  thTH: 'thTH',
}

export const appLocalAccessToken = localServiceHanlder(localName.accessToken)

export const appLocalRefreshToken = localServiceHanlder(localName.refreshToken)

export const appLocalApp = localServiceHanlder(localName.app)

export const appLocalLocale = localServiceHanlder(localName.locale)

export const appLocalVersion = localServiceHanlder(localName.version)

export const clearAppLocal = () => {
  window.localStorage.removeItem(localName.accessToken)
  window.localStorage.removeItem(localName.refreshToken)
}

const setupAppLocal = () => {
  if (currentVersion !== appLocalVersion.get()) {
    clearAppLocal()

    appLocalVersion.set(currentVersion)
    appLocalLocale.set(localeCode.enUS)
  }
}

export default setupAppLocal
