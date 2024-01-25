


  export default defineNitroPlugin((nitroApp) => {
    

    // nitroApp.hooks.hook('app:rendered', (response, {event}) => {
    //   console.log('app:rendered', response)
    //   console.log('222', event.context)
    // })

    nitroApp.hooks.hook('render:response', (response, {event}) => {
      console.log('render:response', response)
      // console.log('222', event.context)
    })

    nitroApp.hooks.hook('beforeResponse', (response, event) => {
      console.log('beforeResponse', response)
      // console.log('222', event.context)
    })

    nitroApp.hooks.hook('afterResponse', async (response, event) => {
      console.log('afterResponse', response)
      // console.log('222', event.context)
    })


  })