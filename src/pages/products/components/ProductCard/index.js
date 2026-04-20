import styles from './styles.module.css'


export const productCard = ({category,description,id,image,price,title,rating}) => {
    const container = document.createElement('div')
    container.classList.add(styles.container)
    container.setAttribute('id',id)
    const categoryTag = document.createElement('p')
    const titleTag = document.createElement('h4')
    const priceTag = document.createElement('p')
    const buyButton = document.createElement('button')
    let resetButtonTextTimer
    const img = document.createElement('img')
    img.setAttribute('src', image)
    img.setAttribute('alt', title)
    img.classList.add(styles.image)
    categoryTag.innerText = category
    priceTag.innerText = `$${price}`
    titleTag.innerText = title
    buyButton.innerText = 'Buy'
    buyButton.classList.add(styles.buyButton)
    buyButton.addEventListener('click', () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
        const productInCart = cartItems.find((item) => item.id === id)

        if (productInCart) {
            productInCart.quantity += 1
        } else {
            cartItems.push({id, title, price, image, category, quantity: 1})
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        buyButton.innerText = 'Added'

        clearTimeout(resetButtonTextTimer)
        resetButtonTextTimer = setTimeout(() => {
            buyButton.innerText = 'Buy'
        }, 1200)
    })

    container.append(titleTag)
    container.append(img)
    container.append(priceTag)
    container.append(categoryTag)
    container.append(buyButton)

    return container
}