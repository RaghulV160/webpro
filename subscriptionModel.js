// models/subscriptionModel.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  billingCycle: { type: String, required: true, enum: ['Monthly', 'Quarterly', 'Yearly'] },
  nextRenewalDate: { type: Date, required: true },
  autoRenew: { type: Boolean, default: false },
  reminderDaysBefore: { type: Number, default: 0, min: 0 },
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
