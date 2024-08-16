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

// Schema for cart data
const cartItemSchema = new mongoose.Schema({
    name: String,
    category: String,
    type: String,
    priceRange: Number,
    insurance: String,
    image: String,
    description: String
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

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

// Fetch all bikes
app.get('/bikes', async (req, res) => {
    try {
        const bikes = await FormData.find();
        res.json(bikes);
    } catch (error) {
        console.error('Error fetching bikes:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Fetch a single bike by ID
app.get('/bikes/:id', async (req, res) => {
    try {
        const bike = await FormData.findById(req.params.id);
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found' });
        }
        res.json(bike);
    } catch (error) {
        console.error('Error fetching bike:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


// Cart Routes
// Add to cart
app.post('/cart', async (req, res) => {
    try {
        const { bikeId } = req.body;

        // Fetch bike details using bikeId from FormData
        const bike = await FormData.findById(bikeId);
        if (!bike) {
            return res.status(404).json({ message: 'Bike not found' });
        }

        // Create a new cart item with the fetched bike details
        const cartItem = new CartItem({
            name: bike.name,
            category: bike.category,
            type: bike.type,
            priceRange: bike.priceRange,
            insurance: bike.insurance,
            image: bike.image,
            description: bike.description
        });
        await cartItem.save();

        res.json({ message: 'Bike added to cart' });
    } catch (err) {
        console.error('Error adding bike to cart:', err);
        res.status(500).json({ message: 'Error adding bike to cart', error: err.message });
    }
});

// Fetch cart items
app.get('/cart', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Remove from cart
app.delete('/cart/:id', async (req, res) => {
    try {
        await CartItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Serve static files
app.use('/uploads', express.static('uploads'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
