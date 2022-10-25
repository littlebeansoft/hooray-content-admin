import { th } from './th/index'
import { en } from './en/index'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Locale } from './interface'

const resources = { en, th }

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export const getLanguage = (locale: string): Locale => {
  return locale === 'th' ? 'th' : 'en'
}

export default i18n
