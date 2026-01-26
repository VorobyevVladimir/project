import {header} from "../header";
import {footer} from "../footer";

export const layout = (page) => {
    const wrapper = document.createElement('div')
    wrapper.appendChild(header())
    wrapper.appendChild(page())
    wrapper.appendChild(footer())
    return wrapper
}