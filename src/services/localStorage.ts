import store from 'store'

import type { QR_GetAppByCredentialResult } from 'graphql/queryResponseTypes'

type StorageKey = 'orgAccessToken' | 'orgRefreshToken' | 'app' | 'version'

const storagePrefix = 'hooray-content'

const storageVersion = process.env.REACT_APP_STORAGE_VERSION

const storageName: Record<StorageKey, string> = {
  orgAccessToken: `${storagePrefix}:accessToken`,
  orgRefreshToken: `${storagePrefix}:refreshToken`,
  app: `${storagePrefix}:app`,
  version: `${storagePrefix}:version`,
}

export const accessToken = {
  get: () => store.get(storageName.orgAccessToken),
  set: (token: string) => store.set(storageName.orgAccessToken, token),
}

export const refreshToken = {
  get: () => store.get(storageName.orgRefreshToken),
  set: (token: string) => store.set(storageName.orgRefreshToken, token),
}

export const app = {
  get: () => store.get(storageName.app),
  set: (app: QR_GetAppByCredentialResult) => store.set(storageName.app, app),
}

export const version = {
  get: () => store.get(storageName.version),
  set: (version: string) => store.set(storageName.version, version),
}

const clearStorage = () => {
  store.clearAll()

  version.set(storageVersion)
}

const setupStorage = () => {
  const currentVersion = version.get()

  if (currentVersion !== storageVersion) {
    clearStorage()
  }
}

export default setupStorage
