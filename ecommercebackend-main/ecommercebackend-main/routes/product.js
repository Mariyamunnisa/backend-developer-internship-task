const express = require('express');
const multer = require('multer');
const { addProduct, removeProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Update with proper storage

router.post('/add', upload.array('images', 5), addProduct); // Support up to 5 images
router.delete('/:id', removeProduct);
router.get('/', getProducts);

module.exports = router;
