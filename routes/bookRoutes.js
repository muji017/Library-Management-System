const express = require('express');
const router = express.Router();
const {
  addBook,
  listBooks
} = require('../controllers/bookController');
const { authAdmin } = require('../middlewares/authMiddleware');

// Add Book (Admin only)
router.post('/add', authAdmin, addBook);

// List Books (All users)
router.get('/list', listBooks);

module.exports = router;