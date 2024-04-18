import vuetify from 'vite-plugin-vuetify'


export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@/assets/styles/main.scss'
  ],
  
  modules: [ 
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: 'assets/styles/vuetify.scss'
            }
          })
        ) 
      ) 
    }
  ],

  vite: {
    ssr: {
        noExternal: ['vuetify']
    },

    css: {
      preprocessorOptions: {
          scss: {
              additionalData: `
                  @use "@/assets/styles/variables/_colors.scss" as *;
                  @use "@/assets/styles/variables/_variables.scss" as *;
                  @use "vuetify/lib/styles/settings/variables" as *;
              `
          }
      }
    }
  }
})
