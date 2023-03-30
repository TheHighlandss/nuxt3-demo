// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path'

export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },
    // alias: {
    //     '@images': resolve(__dirname, './assets/images'),
    //     '@fonts': resolve(__dirname, './assets/fonts'),
    //     '@styles': resolve(__dirname, './assets/styles'),
    // },
    // css:[
    //     '@styles/index.scss'
    // ],

    vite:{
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/index.scss";'
                }
            }
        }
    }
})
