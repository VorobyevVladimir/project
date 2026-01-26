import {addPosts} from "../../../../api/addPost";
import {postCard} from "../postCard";

export const formPost = (wrapper) => {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    const btn = document.createElement('button')
    btn.innerText = 'Создать'


    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const value = input.value

        addPosts({ title: value }).then((data) => {
            form.reset()
            data.json().then((data) => {
                wrapper.append(postCard(data))
            })
        })
    })

    form.append(btn)
    form.append(input)

    return form
}