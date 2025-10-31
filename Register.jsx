// src/Components/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e && e.preventDefault();
    const values = {
      firstName: e?.target?.firstName?.value || '',
      lastName: e?.target?.lastName?.value || '',
      email: e?.target?.email?.value || '',
      mobileNumber: e?.target?.mobileNumber?.value || '',
      password: e?.target?.password?.value || '',
      confirmPassword: e?.target?.confirmPassword?.value || '',
    };

    const newErrors = {};
    if (!values.firstName) newErrors.firstName = 'First Name is required';
    if (!values.lastName) newErrors.lastName = 'Last Name is required';
    if (!values.email) newErrors.email = 'Email is required';
    if (!values.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
    if (!values.password) newErrors.password = 'Password is required';
    if (!values.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';

    setErrors(newErrors);
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <input name="firstName" placeholder="First Name" />
        <input name="lastName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <input name="mobileNumber" placeholder="Mobile Number" />
        <input name="password" placeholder="Password" type="password" />
        <input name="confirmPassword" placeholder="Confirm Password" type="password" />
        <button type="submit">Register</button>
      </form>

      {errors.firstName && <div>First Name is required</div>}
      {errors.lastName && <div>Last Name is required</div>}
      {errors.email && <div>Email is required</div>}
      {errors.mobileNumber && <div>Mobile Number is required</div>}
      {errors.password && <div>Password is required</div>}
      {errors.confirmPassword && <div>Confirm Password is required</div>}
    </div>
  );
};

export default Register;
