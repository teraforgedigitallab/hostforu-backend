const express = require('express');
const router = express.Router();
const { 
  initiateCashfreePayment, 
  verifyCashfreePayment,
  webhookCashfreePayment
} = require('../controllers/paymentController');

router.post('/initiate-cashfree', initiateCashfreePayment);
router.post('/verify-cashfree', verifyCashfreePayment);
router.post('/webhook-cashfree', webhookCashfreePayment);

module.exports = router;
