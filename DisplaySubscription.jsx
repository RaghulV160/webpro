// src/Admin/DisplaySubscription.jsx
import React from 'react';

const DisplaySubscription = () => {
  return (
    <div>
      <h2>Manage Subscriptions</h2>
      <div>
        <button>Add Subscription</button>
        <button>Logout</button>
      </div>

      <div>
        <input placeholder="Search service..." type="text" />
      </div>
    </div>
  );
};

export default DisplaySubscription;
