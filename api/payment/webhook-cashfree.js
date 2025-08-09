import { cashfreeWebhook } from '../../../controllers/paymentController';
import cors from 'cors';

const webhookCashfree = (req, res) => {
  cors({ origin: true, credentials: true })(req, res, () => {
    if (req.method === 'POST') {
      return cashfreeWebhook(req, res);
    }
    res.status(405).json({ message: 'Method Not Allowed' });
  });
};

export default webhookCashfree;