import styles from './styles.module.css'

export const cart = () => {
    const wrapper = document.createElement('div')
    wrapper.classList.add(styles.wrapper)

    const title = document.createElement('h1')
    title.innerText = 'CART'

    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')

    if (!cartItems.length) {
        const emptyText = document.createElement('p')
        emptyText.innerText = 'Your cart is empty.'
        emptyText.classList.add(styles.emptyText)
        wrapper.append(title, emptyText)

        return wrapper
    }

    const list = document.createElement('div')
    list.classList.add(styles.list)

    let total = 0

    cartItems.forEach((item) => {
        const row = document.createElement('div')
        row.classList.add(styles.row)

        const img = document.createElement('img')
        img.src = item.image
        img.alt = item.title
        img.classList.add(styles.image)

        const textWrap = document.createElement('div')
        textWrap.classList.add(styles.textWrap)
        const itemTitle = document.createElement('h4')
        itemTitle.innerText = item.title
        itemTitle.classList.add(styles.itemTitle)

        const itemCategory = document.createElement('p')
        itemCategory.innerText = item.category
        itemCategory.classList.add(styles.itemCategory)

        textWrap.append(itemTitle, itemCategory)

        const quantity = document.createElement('p')
        quantity.innerText = `Qty: ${item.quantity}`
        quantity.classList.add(styles.quantity)

        const subtotalValue = Number(item.price) * Number(item.quantity)
        total += subtotalValue
        const subtotal = document.createElement('p')
        subtotal.innerText = `$${subtotalValue.toFixed(2)}`
        subtotal.classList.add(styles.subtotal)

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.classList.add(styles.deleteButton)
        deleteButton.addEventListener('click', () => {
            const updatedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
                .filter((cartItem) => cartItem.id !== item.id)
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
            window.location.reload()
        })

        row.append(img, textWrap, quantity, subtotal, deleteButton)
        list.append(row)
    })

    const totalTag = document.createElement('h3')
    totalTag.innerText = `Total: $${total.toFixed(2)}`
    totalTag.classList.add(styles.totalTag)

    const checkoutButton = document.createElement('button')
    checkoutButton.innerText = 'Checkout'
    checkoutButton.classList.add(styles.checkoutButton)
    checkoutButton.addEventListener('click', () => {
        localStorage.removeItem('cartItems')
        window.location.reload()
    })

    const totalSection = document.createElement('div')
    totalSection.classList.add(styles.totalSection)
    totalSection.append(checkoutButton, totalTag)

    wrapper.append(title, list, totalSection)

    return wrapper
}