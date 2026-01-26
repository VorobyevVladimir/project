export const baseApi = ({ baseUrl,pathname,method, body, headers }) => {
    const url = `${baseUrl}/${pathname}`
    const config = {
        method,
        body,
        headers
    }
    return fetch(url,config)
}

