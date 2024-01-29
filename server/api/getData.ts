export default defineEventHandler((event) => {
  // if(process.server){
  //   throw createError({ statusCode: 429, statusMessage: 'Too Many Requests', data: { pageType: 'home' } })
  // }

  // throw createError({ statusCode: 429, statusMessage: 'Too Many Requests', data: { pageType: 'home' } })

    return {
      api: 'hello',
      data: [{name: 'hello', age: 12}],
      message: 'This is a mocked response'
    }
  })