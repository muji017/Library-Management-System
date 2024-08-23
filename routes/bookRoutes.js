const express = require('express');
const router = express.Router();
const {
  addBook,
  listBooks,
  updateBook,
  deleteBook
} = require('../controllers/bookController');
const { authAdmin } = require('../middlewares/authMiddleware');

// Add Book (Admin only)
router.post('/add', authAdmin, addBook);

// List Books (All users)
router.get('/list', listBooks);

// Update Book (Admin only)
router.put('/update/:id', authAdmin, updateBook);

// Delete Book (Admin only)
router.delete('/delete/:id', authAdmin, deleteBook);

module.exports = router;