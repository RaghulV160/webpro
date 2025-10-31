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
        <input 
          type="text" 
          placeholder="Search service..." 
        />
      </div>
    </div>
  );
};

export default DisplaySubscription;
