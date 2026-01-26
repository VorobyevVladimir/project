import {baseApi} from "../baseApi";

const baseUrl = 'http://localhost:3000'

export const getPosts = () => {
    return baseApi({ baseUrl, pathname: 'posts' })
}