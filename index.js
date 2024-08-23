const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes')
const borrowRoutes = require('./routes/borrowRoutes')
const reportRoutes = require('./routes/reportRoutes')

dotenv.config();
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000

// routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);
app.use('/api/reports', reportRoutes);

// connecting to database and starting server
mongoose.connect(process.env.MONGODB)
    .then(
        console.log("Database connected"),
        app.listen(port, () => {
            console.log('Server connected on port ' + port);
        })
    )
