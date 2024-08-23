const Borrow = require('../models/Borrow');
const User = require('../models/User');
const Book = require('../models/Book');

// Most Borrowed Books
exports.mostBorrowedBooks = async (req, res) => {
  try {
    const mostBorrowed = await Borrow.aggregate([
      { $group: { _id: '$bookId', borrowCount: { $sum: 1 } } },
      { $sort: { borrowCount: -1 } },
      { $limit: 10 },
      { $lookup: { from: 'books', localField: '_id', foreignField: '_id', as: 'book' } },
      { $unwind: '$book' },
    ]);

    res.status(200).json(mostBorrowed);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Most Active Members
exports.mostActiveMembers = async (req, res) => {
  try {
    const activeMembers = await Borrow.aggregate([
      { $group: { _id: '$userId', borrowCount: { $sum: 1 } } },
      { $sort: { borrowCount: -1 } },
      { $limit: 10 },
      { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'user' } },
      { $unwind: '$user' },
    ]);

    res.status(200).json(activeMembers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Book Availability Summary
exports.bookAvailabilitySummary = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();
    const borrowedBooks = await Borrow.countDocuments({ returnDate: null });
    const availableBooks = totalBooks - borrowedBooks;

    const summary = {
      totalBooks,
      borrowedBooks,
      availableBooks,
    };

    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};