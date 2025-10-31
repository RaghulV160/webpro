import React, { useState } from 'react';
const Login = () => {
const [formData, setFormData] = useState({
email: '',
password: '',
});
const [errors, setErrors] = useState({});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prev) => ({
...prev,
[name]: value,
}));
};
const handleSubmit = (e) => {
e.preventDefault();
const newErrors = {};
if (!formData.email) {
newErrors.email = 'Email is required';
}
if (!formData.password) {
newErrors.password = 'Password is required';
}
setErrors(newErrors);
// If no errors, proceed with login (logic not tested)
if (Object.keys(newErrors).length === 0) {
console.log('Logging in...');
}
};
return (
<div>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="email">Email</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleChange}
/>
{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
</div>
<div>
<label htmlFor="password">Password</label>
<input
type="password"
id="password"
name="password"
value={formData.password}
onChange={handleChange}
/>
{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
</div>
<button type="submit">Login</button>
</form>
</div>
);
};
export default Login;
