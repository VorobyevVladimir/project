import styles from './styles.module.css'
import {nav} from "./components/nav";

export const header = () => {
    const header = document.createElement('header')
    header.classList.add(styles.header)
    header.appendChild(nav())

    return header
}