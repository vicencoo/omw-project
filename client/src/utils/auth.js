import { jwtDecode } from 'jwt-decode';

export const isAdminAuthenticated = () => {
  try {
    const token = localStorage.getItem('token');

    if (!token)
      return {
        isAuthenticated: false,
        username: null,
      };

    const decoded = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      localStorage.removeItem('token');
      return {
        isAuthenticated: false,
        username: null,
      };
    }

    return {
      isAuthenticated: true,
      username: decoded.username,
    };
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return {
      isAuthenticated: false,
      username: null,
    };
  }
};
