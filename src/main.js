import './style.css'
import {products} from "./pages/products";
import {contact} from "./pages/contact";
import {home} from "./pages/home";
import {cart} from "./pages/cart";
import {layout} from "./components/layout";
import {PAGES_MAP} from "./config";

const app = document.querySelector('#app')



const currentPage = () => {
    if(window.location.pathname === PAGES_MAP.about.path) {
        return products()
    }
    if(window.location.pathname === PAGES_MAP.news.path) {
        return contact()
    }
    if(window.location.pathname === PAGES_MAP.cart.path) {
        return cart()
    }
    if(window.location.pathname === PAGES_MAP.home.path) {
        return home()
    }

    return home()
}




app.append(layout(currentPage))