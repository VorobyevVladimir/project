import styles from './styles.module.css'



export const home = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'mainPageWrapper')
    wrapper.classList.add(styles.container)



    const title = document.createElement('h1');
    title.textContent = 'SHOP';
    title.classList.add(styles.title)

    const subtitle = document.createElement('span');
    subtitle.textContent = 'ELEVATE YOUR BRAND WITH OUR GLOBAL REACH \n AND PASSIONATE COMMUNITY';
    subtitle.classList.add(styles.subtitle)

    wrapper.appendChild(title);
    wrapper.appendChild(subtitle);

    return wrapper
}