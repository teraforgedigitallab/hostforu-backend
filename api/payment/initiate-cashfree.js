const { initiateCashfreePayment } = require('../../../controllers/paymentController');
const cors = require('cors');

module.exports = (req, res) => {
  cors({ origin: true, credentials: true })(req, res, () => {
    if (req.method === 'POST') {
      return initiateCashfreePayment(req, res);
    }
    res.status(405).json({ message: 'Method Not Allowed' });
  });
};