import styles from './styles.module.css'


export const productCard = ({category,description,id,image,price,title,rating}) => {
    const container = document.createElement('div')
    container.classList.add(styles.container)
    container.setAttribute('id',id)
    const categoryTag = document.createElement('p')
    const descriptionTag = document.createElement('p')
    const titleTag = document.createElement('h4')
    const priceTag = document.createElement('p')
    const img = document.createElement('img')
    img.setAttribute('src', image)
    img.setAttribute('alt', title)
    descriptionTag.classList.add(styles.description)
    categoryTag.innerText = category
    descriptionTag.innerText = description
    priceTag.innerText = price
    titleTag.innerText = title

    container.append(titleTag)
    container.append(descriptionTag)
    container.append(img)
    container.append(priceTag)
    container.append(categoryTag)

    return container
}