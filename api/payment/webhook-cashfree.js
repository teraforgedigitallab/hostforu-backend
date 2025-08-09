const { cashfreeWebhook } = require('../../controllers/paymentController');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    return cashfreeWebhook(req, res);
  }
  
  res.status(405).json({ message: 'Method Not Allowed' });
};