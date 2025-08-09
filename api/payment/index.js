export default function handler(req, res) {
  res.status(200).json({
    message: "Cashfree Payment API",
    endpoints: [
      "/api/payment/initiate-cashfree",
      "/api/payment/verify-cashfree",
      "/api/payment/webhook-cashfree"
    ]
  });
}