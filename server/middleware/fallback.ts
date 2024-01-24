export default defineEventHandler((event) => {    
    if(event.path.includes('csr=1')){
        event.context.nuxt = event.context.nuxt || {}
        event.context.nuxt.noSSR = true
    }

})