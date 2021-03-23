const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbURI = 'mongodb://localhost/nitr-app';
// const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then((result) => console.log('Mongodb connected...'))
    .catch((err) => console.log(err));

const authRoutes = require('./routes/auth');

app.use('/api', authRoutes);
app.use('/verify', require('./routes/verify'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));