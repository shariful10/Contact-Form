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

// ─── Button For Delete Name ─────────────────────────
const deleteName = () => {
    const nameField = getInputFieldValueById("name-field");
    deleteNameFromLocalStorage(nameField);
}

// ─── Button For Stored Name ─────────────────────────
const sendName = () => {
    const nameField = getInputFieldValueById("name-field");
    saveNameToLocalStorage(nameField);
}

// ─── Get Name Field Value To Stored ─────────────────────────
const getNameFieldValueToStored = (nameField) => {
    let name = getStored('name');
    name = nameField;
    const nameStringified = JSON.stringify(name);
    return nameStringified;
}

// ─── Delete Name From Local Storage ─────────────────────────
const deleteNameFromLocalStorage = (nameField) => {
    const nameStringified = getNameFieldValueToStored(nameField);
    localStorage.removeItem("name", nameStringified);
}

// ─── Name Save To Local Storage ─────────────────────────
const saveNameToLocalStorage = (nameField) => {
    const nameStringified = getNameFieldValueToStored(nameField);
    localStorage.setItem("name", nameStringified);
}

// ─── Button For Delete Email ─────────────────────────
const deleteEmail = () => {
    const emailField = getInputFieldValueById("email-field");
    deleteEmailFromLocalStorage(emailField);
}

// ─── Button For Stored Email ─────────────────────────
const sendEmail = () => {
    const emailField = getInputFieldValueById("email-field");
    saveEmailToLocalStorage(emailField);
}

// ─── Get Email Field Value To Stored ─────────────────────────
const getEmailFieldValueToStored = (emailField) => {
    let email = getStored('email');
    email = emailField;
    const emailStringified = JSON.stringify(email);
    return emailStringified;
}

// ─── Delete Email From Local Storage ─────────────────────────
const deleteEmailFromLocalStorage = (emailField) => {
    const emailStringified = getEmailFieldValueToStored(emailField);
    localStorage.removeItem("email", emailStringified);
}

// ─── Email Save To Local Storage ─────────────────────────
const saveEmailToLocalStorage = (emailField) => {
    const emailStringified = getEmailFieldValueToStored(emailField);
    localStorage.setItem("email", emailStringified);
}

// ─── Button For Delete Message ─────────────────────────
const deleteMessage = () => {
    const textarea = getInputFieldValueById("textarea");
    deleteMsgFromLocalStorage(textarea);
}

// ─── Button For Stored Message ─────────────────────────
const sendMessage = () => {
    const textarea = getInputFieldValueById("textarea");
    saveMsgToLocalStorage(textarea);
}

// ─── Get Message Field Value To Stored ─────────────────────────
const getMsgFieldValueToStored = (textarea) => {
    let message = getStored('message');
    message = textarea;
    const msgStringified = JSON.stringify(message);
    return msgStringified;
}

// ─── Delete Message From Local Storage ─────────────────────────
const deleteMsgFromLocalStorage = (textarea) => {
    const msgStringified = getMsgFieldValueToStored(textarea);
    localStorage.removeItem("message", msgStringified);
}

// ─── Message Save To Local Storage ─────────────────────────
const saveMsgToLocalStorage = (textarea) => {
    const msgStringified = getMsgFieldValueToStored(textarea);
    localStorage.setItem("message", msgStringified);
}

// ─── Button For Reset Local Storage ─────────────────────────
const btnReset = () => {
    localStorage.clear();
}