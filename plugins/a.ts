export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:rendered', (event) => {
        console.log('app:rendered', event, );
        if(event.renderResult?.html === '<div id="__nuxt"></div>' && event.ssrContext){
          event.ssrContext.url += '?error=1'
          event.ssrContext.error = true
          event.renderResult.html = 'error'
        }
        // if(){}
        
      /* 在这里写入你的代码 */
    })

    nuxtApp.hook('vue:error', (event) => {
      console.log('vue:error', event);
      /* 在这里写入你的代码 */
    })

    nuxtApp.hook('app:error', (event) => {
      console.log('app:error', event);
      /* 在这里写入你的代码 */
    })
  })