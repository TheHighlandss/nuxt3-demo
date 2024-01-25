export default defineNitroPlugin((nitro) => {
    console.log(111111);
    nitro.hooks.hook("error",(error) => {
      console.log(`Application error:`,error)
    //   console.log(23,event.path);
    //   navigateTo({
    //     path: '/error',
    //   })
    });
  })