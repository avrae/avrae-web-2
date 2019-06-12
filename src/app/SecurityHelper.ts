export function isLoggedIn() {
  return getToken() != null;
}

export function setToken(token: string, expires: number) {
  localStorage.setItem('expires', (Math.floor(Date.now() / 1000) + expires).toString());
  localStorage.setItem('token', token);
}

export function getToken() {
  if (localStorage.getItem('token') && +localStorage.getItem('expires') > Math.floor(Date.now() / 1000)) {
    return localStorage.getItem('token');
  } else {
    return null;
  }
}

export function removeToken() {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
  }
}
