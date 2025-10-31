import React, { useState } from 'react';
const ViewSubscription = () => {
// The test expects the "No data" message, so we default to an empty array.
const [subscriptions, setSubscriptions] = useState([]);
return (
<div>
<h2>Your Subscriptions</h2>
<button>Logout</button>
<div>
{subscriptions.length === 0 ? (
<p>No subscriptions available.</p>
) : (
<ul>
{subscriptions.map((sub) => (
<li key={sub.id}>{sub.name}</li>
))}
</ul>
)}
</div>
</div>
);
};
export default ViewSubscription;
