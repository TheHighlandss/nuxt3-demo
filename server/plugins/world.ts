


  export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook("error",(error, event) => {
      console.log(`Application error:`,process.server,event)
    //   console.log(23,event.path);
    //   navigateTo({
    //     path: '/error',
    //   })
    return 123
    });

    // nitroApp.hooks.hook('app:rendered', (response, {event}) => {
    //   console.log('app:rendered', response)
    //   console.log('222', event.context)
    // })

    nitroApp.hooks.hook('render:response', (response, {event}) => {
      // console.log('render:response',event)

      // const originUrl = event.node.req.url || ''
      // let [path, query = ''] = originUrl.split('?')
      // if(!query.includes('csr=1')) {
      //   const newQuery = query ? `${query}&csr=1` : 'csr=1'
      //   const url = `${path}?${newQuery}`
      //   event.node.res.statusCode = 302;
      //   event.node.res.setHeader('Location', url);
      //   event.node.res.end();
      // }
    })

    nitroApp.hooks.hook('beforeResponse', (response, event) => {
      // console.log('beforeResponse',response.node.res)
      // const originUrl = response.node.req.url || ''
      // let [path, query = ''] = originUrl.split('?')
      // if(!query.includes('csr=1')) {
      //   const newQuery = query ? `${query}&csr=1` : 'csr=1'
      //   const url = `${path}?${newQuery}`
      //   response.node.res.statusCode = 302;
      //   response.node.res.setHeader('Location', url);
      //   response.node.res.end();
      // }
    })

    nitroApp.hooks.hook('afterResponse', async (response, event) => {
      console.log('afterResponse')
      // console.log('222', event.context)
    })


  })