const getFromStorage = (value) => localStorage.getItem(value);
const setToStorage = (name, value) => localStorage.setItem(name, value);
const clearStorage = () => localStorage.clear();

export { getFromStorage, setToStorage, clearStorage };
