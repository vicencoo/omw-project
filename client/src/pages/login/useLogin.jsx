import { useState } from 'react';
import { axios } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const defaultUser = {
  username: '',
  password: '',
};

export const useLogin = () => {
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const changeValue = (key, value) => {
    setUser((prev) => ({
      ...prev,
      [key]: value,
    }));
    setError('');
  };

  const submit = async () => {
    if (isLogging) return;

    setIsLogging(true);
    try {
      setError('');
      const res = await axios.post('/login', user);
      // const res = await axios.post('/add-user', user);
      if (res.data) {
        localStorage.setItem('token', res.data.token);
        navigate('/manage-prices');
        setUser(defaultUser);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Something went wrong. Try again.',
      );
    } finally {
      setIsLogging(false);
    }
  };

  return {
    changeValue,
    user,
    submit,
    error,
    isLogging,
    showPassword,
    setShowPassword,
  };
};
