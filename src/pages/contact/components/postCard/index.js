import styles from "./styles.module.css";
import {removePost} from "../../../../api/removePost";

export const postCard = ({id, title}) => {
    const container = document.createElement('div')
    container.classList.add(styles.container)
    container.setAttribute('id',id)
    const btn = document.createElement('button')
    btn.setAttribute('type','button')
    btn.innerText = "X"

    btn.addEventListener('click',async (event) => {
        event.preventDefault()
        const data = await removePost(id)

        const wrapper = document.getElementById('postWrapper')
        const post = document.getElementById(id)

        wrapper.removeChild(post)

    })

    const titleTag = document.createElement('h4')
    titleTag.innerText = title

    container.append(btn)
    container.append(titleTag)

    return container
}