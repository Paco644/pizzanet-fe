import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'

import enUS from './locales/en-US.json'
import deDE from './locales/de-DE.json'

type MessageSchema = typeof deDE;

const i18n = createI18n<[MessageSchema], 'de-DE' | 'en-US'>({
  locale: 'de-DE',
  fallbackLocale: 'en-US',
  messages: {
    'de-DE': deDE,
    'en-US': enUS
  },
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currencyDisplay: 'symbol',
        currency: 'USD'
      }
    },
    'de-DE': {
      currency: {
        style: 'currency',
        currencyDisplay: 'symbol',
        currency: 'EUR'
      }
    }
  }
})

loadFonts();

createApp(App).use(i18n)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
