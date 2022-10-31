//Order routes
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET orders",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Created your order",
  });
});
router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order with orderId ",
    orderId: req.params.orderId,
  });
});
router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Order with orderId DELETED",
    orderId: req.params.orderId,
  });
});

module.exports = router;
