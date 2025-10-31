
import React, { useState } from 'react';
const Register = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
email: '',
mobileNumber: '',
password: '',
confirmPassword: '',
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
if (!formData.firstName) newErrors.firstName = 'First Name is required';
if (!formData.lastName) newErrors.lastName = 'Last Name is required';
if (!formData.email) newErrors.email = 'Email is required';
if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
if (!formData.password) newErrors.password = 'Password is required';
if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
setErrors(newErrors);
};
return (
<div>
<h2>Create Account</h2>
<form onSubmit={handleSubmit}>
<div>
<label>First Name</label>
<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
{errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
</div>
<div>
<label>Last Name</label>
<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
{errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
</div>
<div>
<label>Email</label>
<input type="email" name="email" value={formData.email} onChange={handleChange} />
{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
</div>
<div>
<label>Mobile Number</label>
<input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
{errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
</div>
<div>
<label>Password</label>
<input type="password" name="password" value={formData.password} onChange={handleChange} />
{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
</div>
<div>
<label>Confirm Password</label>
<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
{errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
</div>
<button type="submit">Register</button>
</form>
</div>
);
};
export default Register;
