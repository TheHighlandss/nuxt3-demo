// export default  defineEventHandler((event) => {
//     console.log(123,event);
//     // ... 在这里做任何你想做的事情
//   })

  export default defineNuxtRouteMiddleware((to) => {
    // console.log(12,to);
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
    // const nuxtApp = useNuxtApp()
    // console.log('nuxtApp',nuxtApp);
  })