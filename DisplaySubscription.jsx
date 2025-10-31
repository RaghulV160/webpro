import React from 'react';

const DisplaySubscription = () => {
  return (
    <div>
      <h1>Manage Subscriptions</h1>
      <div>
        <button>Add Subscription</button>
        <button>Logout</button>
      </div>
      <input type="text" placeholder="Search service..." />
    </div>
  );
};

export default DisplaySubscription;
