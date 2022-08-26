import store from 'store'

export interface LocalName {
  accessToken: string
  refreshToken: string
  app: string
  version: string
}

export type LocalNameKey = keyof LocalName

export interface LocalServiceGetterAndSetter {
  get: (key: LocalNameKey) => string | null
  set: (key: LocalNameKey, value: string) => void
  remove: (key: LocalNameKey) => void
}

export interface LocalServiceHandler {
  (key: string): LocalServiceGetterAndSetter
}

const currentAppVersion = '1.0.0'

const clearAppLocal = () => {
  appLocal.remove('accessToken')
  appLocal.remove('refreshToken')
  appLocal.remove('app')
  appLocal.remove('version')
}

export const appLocal: LocalServiceGetterAndSetter = {
  get: (key) => store.get(key),
  set: (key, value) => store.set(key, value),
  remove: (key) => store.remove(key),
}

const setupAppLocal = () => {
  if (appLocal.get('version') !== currentAppVersion) {
    clearAppLocal()

    appLocal.set('version', currentAppVersion)
  }
}

export default setupAppLocal
