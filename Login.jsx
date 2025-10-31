import React, { useState } from 'react';

const Login = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!e.target.email.value) newErrors.email = 'Email is required';
    if (!e.target.password.value) newErrors.password = 'Password is required';
    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
