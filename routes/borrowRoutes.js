const express = require('express');
const router = express.Router();
const {
  borrowBook,
  returnBook,
  viewBorrowHistory,
} = require('../controllers/borrowController');
const { authMember } = require('../middlewares/authMiddleware');

// Borrow a book (Member only)
router.post('/borrow/:bookId', authMember, borrowBook);

// Return a borrowed book (Member only)
router.post('/return/:bookId', authMember, returnBook);

// View borrowing history (Member only)
router.get('/history', authMember, viewBorrowHistory);

module.exports = router;