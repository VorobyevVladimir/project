import styles from "./styles.module.css";
import {PAGES_MAP} from "../../config";

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
    home.href = PAGES_MAP.home.path;
    home.innerText = "home";
    nav.appendChild(home);
    const shop = document.createElement("a");
    shop.href = PAGES_MAP.about.path;
    shop.innerText = "shop";
    nav.appendChild(shop);
    const contact = document.createElement("a");
    contact.href = PAGES_MAP.news.path;
    contact.innerText = "contact";
    nav.appendChild(contact);

    const phoneText = document.createElement("p");
    phoneText.classList.add(styles.phoneText);
    phoneText.innerText = "+375291957412";

    right.appendChild(nav);
    right.appendChild(phoneText);
    inner.appendChild(left);
    inner.appendChild(right);
    wrapper.appendChild(inner);

    return wrapper;
};