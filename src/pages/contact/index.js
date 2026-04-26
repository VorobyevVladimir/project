import styles from "./styles.module.css";

export const contact = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add(styles.container);

    const formCard = document.createElement("div");
    formCard.classList.add(styles.formCard);

    const nameRow = document.createElement("div");
    nameRow.classList.add(styles.row);

    const firstNameGroup = document.createElement("div");
    firstNameGroup.classList.add(styles.fieldGroup);
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name";
    const firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.placeholder = "First Name";
    firstNameInput.classList.add(styles.input);
    firstNameGroup.appendChild(firstNameLabel);
    firstNameGroup.appendChild(firstNameInput);

    const lastNameGroup = document.createElement("div");
    lastNameGroup.classList.add(styles.fieldGroup);
    const lastNameLabel = document.createElement("label");
    lastNameLabel.textContent = "Last Name";
    const lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.placeholder = "Last Name";
    lastNameInput.classList.add(styles.input);
    lastNameGroup.appendChild(lastNameLabel);
    lastNameGroup.appendChild(lastNameInput);

    nameRow.appendChild(firstNameGroup);
    nameRow.appendChild(lastNameGroup);

    const emailRow = document.createElement("div");
    emailRow.classList.add(styles.row);
    const emailGroup = document.createElement("div");
    emailGroup.classList.add(styles.fieldGroupWide);
    const emailRowLabel = document.createElement("label");
    emailRowLabel.textContent = "Email";
    const emailRowInput = document.createElement("input");
    emailRowInput.type = "email";
    emailRowInput.placeholder = "your@email.com";
    emailRowInput.classList.add(styles.input);
    emailGroup.appendChild(emailRowLabel);
    emailGroup.appendChild(emailRowInput);
    emailRow.appendChild(emailGroup);

    const phoneRow = document.createElement("div");
    phoneRow.classList.add(styles.row);
    const phoneGroup = document.createElement("div");
    phoneGroup.classList.add(styles.fieldGroupWide);
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone";
    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.placeholder = "+(000) 000-0000";
    phoneInput.classList.add(styles.input);
    phoneGroup.appendChild(phoneLabel);
    phoneGroup.appendChild(phoneInput);
    phoneRow.appendChild(phoneGroup);

    const messageRow = document.createElement("div");
    messageRow.classList.add(styles.row);
    const messageGroup = document.createElement("div");
    messageGroup.classList.add(styles.fieldGroupWide);
    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message";
    const messageInput = document.createElement("textarea");
    messageInput.placeholder = "I want to report your social media admin...";
    messageInput.classList.add(styles.textarea);
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageInput);
    messageRow.appendChild(messageGroup);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Form";
    submitButton.classList.add(styles.submitButton);

    const disclaimer = document.createElement("p");
    disclaimer.textContent =
        "We do not promise a reply within 24 hours because that would be a promise we make to everyone and keep for no one. We promise that the right person sees it and responds when there is something worth saying back.";

    const formMessage = document.createElement("p");
    formMessage.classList.add(styles.formMessage);
    const formFields = [
        firstNameInput,
        lastNameInput,
        emailRowInput,
        phoneInput,
        messageInput
    ];

    submitButton.addEventListener("click", () => {
        const hasEmptyField = formFields
            .map((field) => field.value)
            .some((value) => value.trim() === "");

        if (hasEmptyField) {
            formMessage.textContent = "All fields need to be filled.";
            formMessage.classList.add(styles.errorMessage);
            return;
        }

        formMessage.textContent = "";
        formMessage.classList.remove(styles.errorMessage);
        if (!hasEmptyField) {
            alert("form sent");
            formFields.forEach((field) => {
                field.value = "";
            });
        }
    });

    

    formCard.appendChild(nameRow);
    formCard.appendChild(emailRow);
    formCard.appendChild(phoneRow);
    formCard.appendChild(messageRow);
    formCard.appendChild(submitButton);
    formCard.appendChild(formMessage);
    formCard.appendChild(disclaimer);


    wrapper.appendChild(formCard);

    return wrapper;
}