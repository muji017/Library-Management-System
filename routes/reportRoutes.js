const express = require('express');
const router = express.Router();
const {
  mostBorrowedBooks,
  mostActiveMembers,
  bookAvailabilitySummary,
} = require('../controllers/reportController');
const { authAdmin } = require('../middlewares/authMiddleware');

// Most Borrowed Books (Admin only)
router.get('/most-borrowed', authAdmin, mostBorrowedBooks);

// Most Active Members (Admin only)
router.get('/most-active', authAdmin, mostActiveMembers);

// Book Availability Summary (Admin only)
router.get('/availability-summary', authAdmin, bookAvailabilitySummary);

module.exports = router;