// src/Admin/CreateSubscription.jsx
import React, { useState } from 'react';

const CreateSubscription = () => {
  const [errors, setErrors] = useState({});

  // read localStorage token if present (tests mock this)
  const token = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;

  const onSubmit = (e) => {
    e && e.preventDefault();
    const serviceName = e?.target?.serviceName?.value || '';
    const amount = e?.target?.amount?.value || '';
    const billingCycle = e?.target?.billingCycle?.value || '';
    const nextRenewalDate = e?.target?.nextRenewalDate?.value || '';

    const newErrors = {};
    if (!serviceName) newErrors.serviceName = 'Service Name is required';
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) newErrors.amount = 'Valid amount is required';
    if (!billingCycle) newErrors.billingCycle = 'Billing cycle is required';
    if (!nextRenewalDate) newErrors.nextRenewalDate = 'Next renewal date is required';

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Add Subscription</h1>
      <button>Back</button>

      <form onSubmit={onSubmit}>
        <input name="serviceName" placeholder="Service Name" />
        <input name="amount" placeholder="Amount" />
        <input name="billingCycle" placeholder="Billing Cycle" />
        <input name="nextRenewalDate" placeholder="Next Renewal Date" />
        <button type="submit">Add Subscription</button>
      </form>

      {errors.serviceName && <div>Service Name is required</div>}
      {errors.amount && <div>Valid amount is required</div>}
      {errors.billingCycle && <div>Billing cycle is required</div>}
      {errors.nextRenewalDate && <div>Next renewal date is required</div>}
    </div>
  );
};

export default CreateSubscription;
