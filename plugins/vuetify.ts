import {createVuetify} from 'vuetify'
import {light} from '@/utils/vuetify/themes'
import {defaults} from '@/utils/vuetify/defaults'


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,

    theme: {
      defaultTheme: 'light',
      themes: {
        light,
        dark: {}
      }
    }
  })

  app.vueApp.use(vuetify)
})
