import styles from './styles.module.css'
import {contact} from "../contact";


export const home = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'mainPageWrapper')
    wrapper.classList.add(styles.container)

    const shopNowButton = document.createElement('button')
    shopNowButton.setAttribute('id', 'shopNowButton')
    shopNowButton.innerText = 'SHOP NOW';
    shopNowButton.classList.add(styles.shopButton)

    const contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contactButton')
    contactButton.innerText = 'CONTACT US';
    contactButton.classList.add(styles.contactButton)


    wrapper.appendChild(shopNowButton)
    wrapper.appendChild(contactButton)

    return wrapper
}