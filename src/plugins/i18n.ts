import { I18nOptions, createI18n } from 'vue-i18n'
import enUS from '@/lang/en-US'
import esMX from '@/lang/es-MX'

const options: I18nOptions = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  availableLocales: ['en-US', 'es-MX'],
  messages: { 'en-US': enUS, 'en-MX': esMX },
  legacy: false
}

const i18n = createI18n(options)

export default i18n
