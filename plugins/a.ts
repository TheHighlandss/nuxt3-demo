export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:rendered', (event) => {
      console.log('app:rendered');
        // console.log('app:rendered', event, );
        // console.log('nuxtApp',nuxtApp);
        // nuxtApp.ssrContext.noSSR = true

        // if(event.renderResult?.html === '<div id="__nuxt"></div>' && event.ssrContext){
        //   nuxtApp.ssrContext.noSSR = true
        //   console.log(123, nuxtApp.ssrContext?.noSSR);
        //   // nuxtApp.ssrContext.event.context.nuxt.noSSR = true
        //   if(nuxtApp.ssrContext){
        //     // nuxtApp.ssrContext.noSSR = true
        //     console.log(1);
        //   }

        //   // event.ssrContext.url += '?error=1'
        //   // event.ssrContext.error = true
        //   // event.renderResult.html = 'error'
        // }
        // if(){}
        
    })

    nuxtApp.hook('vue:error', (event) => {
      console.log('vue:error', event);
    })

    nuxtApp.hook('app:error', (event) => {
      console.log('app:error', event);
    })
  })