import React, { useState } from 'react';

const CreateSubscription = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      serviceName: e.target.serviceName.value,
      amount: e.target.amount.value,
      billingCycle: e.target.billingCycle.value,
      nextRenewalDate: e.target.nextRenewalDate.value,
    };

    const newErrors = {};
    if (!values.serviceName) newErrors.serviceName = 'Service Name is required';
    if (!values.amount || isNaN(values.amount) || values.amount <= 0)
      newErrors.amount = 'Valid amount is required';
    if (!values.billingCycle) newErrors.billingCycle = 'Billing cycle is required';
    if (!values.nextRenewalDate)
      newErrors.nextRenewalDate = 'Next renewal date is required';

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Add Subscription</h1>
      <button>Back</button>

      <form onSubmit={handleSubmit}>
        <input name="serviceName" />
        <input name="amount" />
        <input name="billingCycle" />
        <input name="nextRenewalDate" />
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
