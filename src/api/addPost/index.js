import {baseApi} from "../baseApi";

const baseUrl = 'http://localhost:3000'

export const addPosts = (body) => {
    return baseApi({ baseUrl, pathname: 'posts', method: 'POST', body: JSON.stringify(body) })
}