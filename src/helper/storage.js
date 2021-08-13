const getFromStorage = (value) => localStorage.getItem(value);
const setToStorage = (name, value) => localStorage.setItem(name, value);

export { getFromStorage, setToStorage };
