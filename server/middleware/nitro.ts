// import { parseURLQuery, stringifyURLQuery  } from "@t5-utils/core"

export default defineNitroErrorHandler((error:any, event:any) => {
    const originUrl = error.req.url

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
    
    let [path, query = ''] = originUrl.split('?')
    if(!query.includes('csr=1')) {
      const newQuery = query ? `${query}&csr=1` : 'csr=1'
      const url = `${path}?${newQuery}`
      error.res.statusCode = 302;
      error.res.setHeader('Location', url);
      error.res.end();
    }
  })