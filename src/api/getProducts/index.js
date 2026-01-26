import {baseApi} from "../baseApi";

const baseUrl = 'https://fakestoreapi.com'

export const getProducts = () => {
    return baseApi({ baseUrl, pathname: 'products' })
}
