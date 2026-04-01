import styles from './styles.module.css'
import {getProducts} from "../../api/getProducts";
import {productCard} from "./components/ProductCard";

export const products = () => {
    const wrapper = document.createElement('div')
    wrapper.classList.add(styles.wrapper)

    const title = document.createElement('h1')
    title.classList.add(styles.title)
    title.innerText = 'PRODUCTS'

    const productsContainer = document.createElement('div')
    productsContainer.classList.add(styles.productsContainer)
    productsContainer.innerText = 'Loading products...'

    const filtersContainer = document.createElement('div')
    filtersContainer.classList.add(styles.filtersContainer)

    const filterLabel = document.createElement('label')
    filterLabel.setAttribute('for', 'categoryFilter')
    filterLabel.innerText = 'Category:'
    filterLabel.classList.add(styles.filterLabel)

    const filterSelect = document.createElement('select')
    filterSelect.setAttribute('id', 'categoryFilter')
    filterSelect.classList.add(styles.filterSelect)

    filtersContainer.append(filterLabel, filterSelect)

    getProducts()
        .then((response) => response.json())
        .then((items) => {
            const categories = ['All', ...new Set(items.map((item) => item.category))]

            categories.forEach((category) => {
                const option = document.createElement('option')
                option.value = category
                option.innerText = category
                filterSelect.append(option)
            })

            const renderProducts = (selectedCategory) => {
                productsContainer.innerText = ''

                const filteredItems = selectedCategory === 'All'
                    ? items
                    : items.filter((item) => item.category === selectedCategory)

                filteredItems.forEach((item) => {
                    productsContainer.append(productCard(item))
                })
            }

            renderProducts('All')

            filterSelect.addEventListener('change', (event) => {
                renderProducts(event.target.value)
            })
        })
        .catch(() => {
            productsContainer.innerText = 'Failed to load products.'
        })

    wrapper.append(title, filtersContainer, productsContainer)

    return wrapper
}