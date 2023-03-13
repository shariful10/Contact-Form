// ─── Get Input Field Value By Id From Here (Reusable) ─────────────────────────
const getInputFieldValueById = (id) => {
    const inputField = document.getElementById(id);
    names = inputField.value;
    inputField.value = '';
    return names;
}

// ─── Get Stored From Here (Reusable) ─────────────────────────
const getStored = (keyName) => {
    let key = {};
    const storedKey = localStorage.getItem(keyName);
    if (storedKey) {
        key = JSON.parse(storedKey);
    }
    return key;
}

const deleteName = () => {
    const nameField = getInputFieldValueById("name-field");
    deleteNameFromLocalStorage(nameField);
}

const sendName = () => {
    const nameField = getInputFieldValueById("name-field");
    saveNameToLocalStorage(nameField);
}

const getNameFieldValueToStored = (nameField) => {
    let name = getStored('name');
    name = nameField;
    const nameStringified = JSON.stringify(name);
    return nameStringified;
}

const deleteNameFromLocalStorage = (nameField) => {
    const nameStringified = getNameFieldValueToStored(nameField);
    localStorage.removeItem("name", nameStringified);
}

const saveNameToLocalStorage = (nameField) => {
    const nameStringified = getNameFieldValueToStored(nameField);
    localStorage.setItem("name", nameStringified);
}

const deleteEmail = () => {
    const emailField = getInputFieldValueById("email-field");
    deleteEmailFromLocalStorage(emailField);
}

const sendEmail = () => {
    const emailField = getInputFieldValueById("email-field");
    saveEmailToLocalStorage(emailField);
}

const getEmailFieldValueToStored = (emailField) => {
    let email = getStored('email');
    email = emailField;
    const emailStringified = JSON.stringify(email);
    return emailStringified;
}

const deleteEmailFromLocalStorage = (emailField) => {
    const emailStringified = getEmailFieldValueToStored(emailField);
    localStorage.removeItem("email", emailStringified);
}

const saveEmailToLocalStorage = (emailField) => {
    const emailStringified = getEmailFieldValueToStored(emailField);
    localStorage.setItem("email", emailStringified);
}

const deleteMessage = () => {
    const textarea = getInputFieldValueById("textarea");
    deleteMsgFromLocalStorage(textarea);
}

const sendMessage = () => {
    const textarea = getInputFieldValueById("textarea");
    saveMsgToLocalStorage(textarea);
}

const getMsgFieldValueToStored = (textarea) => {
    let message = getStored('message');
    message = textarea;
    const msgStringified = JSON.stringify(message);
    return msgStringified;
}

const deleteMsgFromLocalStorage = (textarea) => {
    const msgStringified = getMsgFieldValueToStored(textarea);
    localStorage.removeItem("message", msgStringified);
}

const saveMsgToLocalStorage = (textarea) => {
    const msgStringified = getMsgFieldValueToStored(textarea);
    localStorage.setItem("message", msgStringified);
}

const btnReset = () => {
    localStorage.clear();
}