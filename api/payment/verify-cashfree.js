import { verifyCashfreePayment } from '../../../controllers/paymentController';
const cors = require('cors');

const verifyCashfree = (req, res) => {
  cors({ origin: true, credentials: true })(req, res, () => {
    if (req.method === 'POST') {
      return verifyCashfreePayment(req, res);
    }
    res.status(405).json({ message: 'Method Not Allowed' });
  });
};

export default verifyCashfree;