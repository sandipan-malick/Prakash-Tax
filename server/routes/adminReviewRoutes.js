const express = require("express");
const {
  getAllReviews,
  deleteReview,
} = require("../controllers/adminReviewController");

const router = express.Router();

router.get("/reviews", getAllReviews);       
router.delete("/reviews/:id", deleteReview);  

module.exports = router;
