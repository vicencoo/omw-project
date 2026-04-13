import { useState } from 'react';
import { axios } from '../../api/axios';

const Default_Email = {
  name: '',
  surname: '',
  email: '',
  subject: '',
  message: '',
};

export const useContact = () => {
  const [email, setEmail] = useState(Default_Email);
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const changeInputValue = (key, value) => {
    setEmail((prev) => ({
      ...prev,
      [key]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [key]: '',
    }));
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(email).forEach((key) => {
      if (!email[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });
    if (
      email.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.email)
    ) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    setIsDisabled(true);
    try {
      if (!validate()) return;
      const res = await axios.post('/send-email', email);
      if (res.data) {
        setEmail(Default_Email);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDisabled(false);
    }
  };

  return {
    email,
    errors,
    changeInputValue,
    submit,
    isDisabled,
  };
};
