// controllers/subscriptionController.js
const Subscription = require('../models/subscriptionModel');

exports.addSubscription = async (req, res) => {
  try {
    await Subscription.create(req.body);
    return res.status(200).json({ message: 'Subscription Added Successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Error' });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const updated = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Subscription not found' });
    return res.status(200).json({ message: 'Subscription Updated Successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Error' });
  }
};

exports.deleteSubscription = async (req, res) => {
  try {
    const deleted = await Subscription.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Subscription not found' });
    return res.status(200).json({ message: 'Subscription Deleted Successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Error' });
  }
};

exports.getSubscriptionById = async (req, res) => {
  try {
    const sub = await Subscription.findById(req.params.id);
    if (!sub) return res.status(404).json({ message: 'Subscription not found' });
    return res.status(200).json(sub);
  } catch (err) {
    return res.status(500).json({ message: err.message || 'Error' });
  }
};
