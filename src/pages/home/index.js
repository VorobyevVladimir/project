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

    const description = document.createElement('p')
    description.textContent = 'Discover curated products, secure checkout, and fast delivery built for modern teams and creators.'
    description.classList.add(styles.description)

    const ctaButton = document.createElement('a')
    ctaButton.textContent = 'Shop now'
    ctaButton.href = '/products'
    ctaButton.classList.add(styles.ctaButton)

    const highlights = document.createElement('div')
    highlights.classList.add(styles.highlights)

    const highlightData = [
        {
            title: 'Worldwide Delivery',
            text: 'Reliable shipping options with tracking updates from checkout to doorstep.',
        },
        {
            title: 'Curated Selection',
            text: 'Quality-first products chosen to meet performance, style, and value expectations.',
        },
        {
            title: 'Fast Support',
            text: 'Get quick help from our team whenever you need guidance with orders or products.',
        },
    ]

    highlightData.forEach((item) => {
        const card = document.createElement('article')
        card.classList.add(styles.card)

        const cardTitle = document.createElement('h3')
        cardTitle.textContent = item.title
        cardTitle.classList.add(styles.cardTitle)

        const cardText = document.createElement('p')
        cardText.textContent = item.text
        cardText.classList.add(styles.cardText)

        card.append(cardTitle, cardText)
        highlights.append(card)
    })

    wrapper.append(title, subtitle, description, ctaButton, highlights)

    return wrapper
}