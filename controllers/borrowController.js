const Borrow = require('../models/Borrow');
const Book = require('../models/Book');

// Borrow a book (Member only)
exports.borrowBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;
   
    // Check if the book is available
    const book = await Book.findById(bookId);
    
    if (!book || book.availableCopies <= 0) {
      return res.status(400).json({ message: 'Book not available' });
    }

    // Create a borrow record
    const borrow = new Borrow({ userId, bookId, borrowDate: new Date() });
    await borrow.save();

    // Update the available copies of the book
    book.availableCopies -= 1;
    await book.save();

    res.status(200).json({ message: 'Book borrowed successfully', borrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Return a borrowed book (Member only)
exports.returnBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    // Find the borrow record
    const borrow = await Borrow.findOne({ userId, bookId, returnDate: null });
    if (!borrow) {
      return res.status(400).json({ message: 'No record of borrowing this book' });
    }

    // Update the borrow record with return date
    borrow.returnDate = new Date();
    await borrow.save();

    // Update the available copies of the book
    const book = await Book.findById(bookId);
    book.availableCopies += 1;
    await book.save();

    res.status(200).json({ message: 'Book returned successfully', borrow });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// View borrowing history (Member only)
exports.viewBorrowHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    
    const borrowHistory = await Borrow.find({ userId }).populate('bookId', 'title author');

    res.status(200).json(borrowHistory);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};