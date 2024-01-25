


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
      console.log('render:response')
      // console.log('222', event.context)
    })

    nitroApp.hooks.hook('beforeResponse', (response, event) => {
      console.log('beforeResponse')
      // console.log('222', event.context)
    })

    nitroApp.hooks.hook('afterResponse', async (response, event) => {
      console.log('afterResponse')
      // console.log('222', event.context)
    })


  })