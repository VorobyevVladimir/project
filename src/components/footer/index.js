import styles from "./styles.module.css";

export const footer = () => {
    const wrapper = document.createElement("footer");
    wrapper.classList.add(styles.footer);

    const inner = document.createElement("div");
    inner.classList.add(styles.inner);

    const left = document.createElement("div");
    left.classList.add(styles.leftSection);
    left.innerText = "Copyright © 2026 \nAll rights reserved.";

    const right = document.createElement("div");
    right.classList.add(styles.rightSection);

    const nav = document.createElement("div");
    nav.classList.add(styles.nav);

    const home = document.createElement("a");
    home.href = "#";
    home.innerText = "home";
    nav.appendChild(home);
    const shop = document.createElement("a");
    shop.href = "#";
    shop.innerText = "shop";
    nav.appendChild(shop);
    const contact = document.createElement("a");
    contact.href = "#";
    contact.innerText = "contact";
    nav.appendChild(contact);

    right.appendChild(nav);

    inner.appendChild(left);
    inner.appendChild(right);
    wrapper.appendChild(inner);

    return wrapper;
};