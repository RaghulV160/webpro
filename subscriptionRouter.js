// routes/subscriptionRouter.js
const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const { validateToken } = require('../authUtils');

// Add a new subscription
router.post('/add', validateToken, subscriptionController.addSubscription);
// Update an existing subscription
router.put('/update/:id', validateToken, subscriptionController.updateSubscription);
// Delete a subscription
router.delete('/delete/:id', validateToken, subscriptionController.deleteSubscription);
// Get subscription by ID
router.get('/:id', validateToken, subscriptionController.getSubscriptionById);
module.exports = router;
