const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

const getLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  return value || '';
};

const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

const setSessionStorage = (key, value) => {
  window.sessionStorage.setItem(key, value);
};

const getSessionStorage = (key) => {
  const value = window.sessionStorage.getItem(key);
  return value || '';
};

const removeSessionStorage = (key) => {
  window.sessionStorage.removeItem(key);
};

export const localStorage = {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
};

export const sessionStorage = {
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage
};

export {
  setLocalStorage,
  getLocalStorage,
  getSessionStorage,
  removeSessionStorage
}
