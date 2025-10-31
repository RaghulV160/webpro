import React, { useState, useEffect } from 'react';

const CreateSubscription = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    amount: '',
    billingCycle: '',
    nextRenewalDate: '',
  });
  const [errors, setErrors] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Test setup mocks localStorage.getItem('editSubscriptionId') to return ''
    const editId = localStorage.getItem('editSubscriptionId');
    if (editId) {
      setIsEditMode(true);
      // In a real app, you'd fetch data here
    } else {
      setIsEditMode(false);
    }
  }, []);

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

    if (!formData.serviceName) newErrors.serviceName = 'Service Name is required';
    if (!formData.amount) newErrors.amount = 'Valid amount is required';
    if (!formData.billingCycle) newErrors.billingCycle = 'Billing cycle is required';
    if (!formData.nextRenewalDate) newErrors.nextRenewalDate = 'Next renewal date is required';

    setErrors(newErrors);
  };

  const headingText = isEditMode ? 'Update Subscription' : 'Add Subscription';

  return (
    <div>
      <button type="button">Back</button>
      <h2>{headingText}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name</label>
          <input type="text" name="serviceName" value={formData.serviceName} onChange={handleChange} />
          {errors.serviceName && <p style={{ color: 'red' }}>{errors.serviceName}</p>}
        </div>
        <div>
          <label>Amount</label>
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
          {errors.amount && <p style={{ color: 'red' }}>{errors.amount}</p>}
        </div>
        <div>
          <label>Billing Cycle</label>
          <input type="text" name="billingCycle" value={formData.billingCycle} onChange={handleChange} />
          {errors.billingCycle && <p style={{ color: 'red' }}>{errors.billingCycle}</p>}
        </div>
        <div>
          <label>Next Renewal Date</label>
          <input type="date" name="nextRenewalDate" value={formData.nextRenewalDate} onChange={handleChange} />
          {errors.nextRenewalDate && <p style={{ color: 'red' }}>{errors.nextRenewalDate}</p>}
        </div>
        <button type="submit">{headingText}</button>
      </form>
    </div>
  );
};

export default CreateSubscription;
