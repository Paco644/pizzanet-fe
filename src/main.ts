import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createI18n } from 'vue-i18n'

// const messages = {
//   enUS: {
//     message: {
//       hello: 'Hello World!'
//     }
//   },
//   deDE: {
//     message: {
//       hello: 'Hallo Welt!'
//     }
//   }
// }

// const i18n = createI18n({
//   locale: 'en',
//   fallbackLocale: 'de',
//   allowComposition: true,
// })

loadFonts()

createApp(App).use(i18n)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
