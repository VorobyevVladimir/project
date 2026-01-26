import {baseApi} from "../baseApi";

const baseUrl = 'http://localhost:3000'

export const removePost = (id) => {
    return baseApi({ baseUrl, pathname: `posts/${id}`, method: 'DELETE' })
}