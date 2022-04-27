const LOGIN_KEY = "login";
const PASSWORD_KEY = "password";

export const saveSession = (login: string, password: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(LOGIN_KEY, login);
    localStorage.setItem(PASSWORD_KEY, password);
  }
};

export const getSession = () => {
  if (typeof window !== "undefined") {
    return {
      login: localStorage.getItem(LOGIN_KEY) || "",
      password: localStorage.getItem(PASSWORD_KEY) || "",
    };
  }
  return null;
};
