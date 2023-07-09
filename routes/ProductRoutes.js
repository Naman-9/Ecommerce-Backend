const express = require('express');
const { fetchAllProducts, fetchProductById, updateProduct, createProduct, deleteProduct } = require('../controller/ProductController');

const router = express.Router();

// /products is added in index,js
router
    .post('/', createProduct)
    .get('/', fetchAllProducts)
    .get('/:id', fetchProductById)
    .patch('/:id', updateProduct)
    .delete('/:id', deleteProduct)
    ;

exports.router = router; 