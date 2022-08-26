import type { LocalServiceHandler } from './interface'

const appLocalPrefix = 'msc-user'

export const withLocalPrefix = (localName: string) => `${appLocalPrefix}:${localName}`

const localServiceHanlder: LocalServiceHandler = (key) => ({
  get: () => window.localStorage.getItem(key),
  set: (value) => window.localStorage.setItem(key, value),
})

export default localServiceHanlder
