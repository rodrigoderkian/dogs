import React from 'react';
import { TOKEN_POST, USER_GET } from '../api';
import useLocalStorage from '../Hooks/useLocalStorage';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [token, setToken] = useLocalStorage('token', '');

  const getUser = async (token) => {
    try {
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
    } catch (error) {}
  };

  const userLogin = async (username, password) => {
    try {
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      const { token } = await response.json();
      setToken(token);
      getUser(token);
    } catch (error) {}
  };

  return (
    <UserContext.Provider value={{ userLogin, data, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
