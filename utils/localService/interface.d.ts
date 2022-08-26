export interface LocalServiceGetterAndSetter {
  get: () => string | null
  set: (value: string) => void
}

export interface LocalServiceHandler {
  (key: string): LocalServiceGetterAndSetter
}
