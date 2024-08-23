const Book = require('../models/Book');

// Add a new book (Admin only)
exports.addBook = async (req, res) => {
    try {
        const { title, author, ISBN, publicationDate, genre, numberOfCopies } = req.body;

        // Check if the book already exists in the database.
        const existingBook = await Book.findOne({ title: req.body.title });
        if (existingBook) {
            return res.status(400).json({ message: "Book already exists" });
        }

        // create instance of model
        const newBook = new Book({
            title,
            author,
            ISBN,
            publicationDate,
            genre,
            numberOfCopies,
            availableCopies: numberOfCopies,
        });

        // save to database
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// List all books with pagination and filtering
exports.listBooks = async (req, res) => {
    try {
        const { page = 1, limit = 10, genre, author } = req.query;

        const query = {};
        if (genre) query.genre = genre;
        if (author) query.author = author;

        const books = await Book.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update book details (Admin only)
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a book (Admin only)
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};