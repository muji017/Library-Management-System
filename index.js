const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000

// routes
app.use('/api/users', userRoutes);

//global error handler
app.use((err, req, res, next) => {
    res.status(500).json({ status: "error", message: err.message });
  });

// connecting to database and starting server
mongoose.connect(process.env.MONGODB)
    .then(
        console.log("Database connected"),
        app.listen(port, () => {
            console.log('Server connected on port ' + port);
        })
    )
