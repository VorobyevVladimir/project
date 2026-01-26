import styles from './style.module.css'
import {PAGES_MAP} from "../../../../config";

export const nav = () => {
    const nav = document.createElement('nav')
    nav.classList.add(styles.nav)

   Object.entries(PAGES_MAP).forEach(([_, item]) => {
       const link = document.createElement('a')
       link.setAttribute('href', item.path)
       link.innerText = item.title

       nav.append(link)
   })


    return nav
}