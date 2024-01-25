// import { parseURLQuery, stringifyURLQuery  } from "@t5-utils/core"

export default defineEventHandler( (error:any) => {
    const originUrl = error.req.url
    console.log('hh',originUrl);

    // const query: Record<string, string> = parseURLQuery(originUrl)
    // const path = originUrl.split('?')[0]

    // if(+query.csr !== 1){
    //   query.csr = '1'
    //   const newQuery = stringifyURLQuery(query)
    //   const url = `${path}?${newQuery}`

    //   error.res.statusCode = 302;
    //   error.res.setHeader('Location', url);
    //   error.res.end();
    // }

    // console.log(error);
    // let [path, query = ''] = originUrl.split('?')
    // if(!query.includes('csr=1')) {
    //   const newQuery = query ? `${query}&csr=1` : 'csr=1'
    //   const url = `${path}?${newQuery}`
    //   error.res.statusCode = 302;
    //   error.res.setHeader('Location', url);
    //   error.res.end();
    // }

    // console.log(123, error);
    // error.context.nuxt = error.context.nuxt || {}
    // error.context.nuxt.noSSR = true
    // console.log(1);
  })

  // export const log =  defineEventHandler((event) => {
  //   console.log(123,event);
  //   // ... 在这里做任何你想做的事情
  // })