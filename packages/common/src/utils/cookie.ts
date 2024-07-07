export const deleteCookie = (cookieName: string) => {
  document.cookie =
    cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

export const getCookie = (cookieName: string): string | null => {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
};

export const setCookie = (name: string, value: string): void => {
  document.cookie = `${name}=${value};`;
};
