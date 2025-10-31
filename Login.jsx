// src/Components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e && e.preventDefault();
    const newErrors = {};
    const email = e?.target?.email?.value || '';
    const password = e?.target?.password?.value || '';

    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>

      {errors.email && <div>{errors.email}</div>}
      {errors.password && <div>{errors.password}</div>}
    </div>
  );
};

export default Login;
