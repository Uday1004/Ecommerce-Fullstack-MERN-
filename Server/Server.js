const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/GoRide', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schema for form data
const formDataSchema = new mongoose.Schema({
    name: String,
    category: String,
    type: String,
    priceRange: Number,
    insurance: String,
    image: String,
    description: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
app.post('/submit', upload.single('image'), async (req, res) => {
    try {
        const { name, category, type, priceRange, insurance, description } = req.body;
        const image = req.file ? req.file.filename : '';

        const formData = new FormData({ name, category, type, priceRange, insurance, image, description });
        await formData.save();

        res.json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// New route to fetch data
app.get('/bikes', async (req, res) => {
    try {
        const bikes = await FormData.find();
        res.json(bikes);
    } catch (error) {
        console.error('Error fetching bikes:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Serve static files
app.use('/uploads', express.static('uploads'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
