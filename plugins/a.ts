export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:rendered', (event) => {
      // console.log('app:rendered',event);
      // if(event.renderResult?.html === '<div id="__nuxt"></div>'){
      //   const response = event.ssrContext?.event.node.res
      //   const originUrl = event.ssrContext?.event.node.req.url || ''
      //   let [path, query = ''] = originUrl.split('?')
      //   if(!query.includes('csr=1') && response) {
      //     const newQuery = query ? `${query}&csr=1` : 'csr=1'
      //     const url = `${path}?${newQuery}`
      //     response.statusCode = 302;
      //     response.setHeader('Location', url);
      //     response.end();
      //   }
      // }
    })

    // nuxtApp.hook('vue:error', (event) => {
    //   console.log('vue:error', event);
    // })

    // nuxtApp.hook('app:error', (event) => {
    //   console.log('app:error', event);
    // })
  })