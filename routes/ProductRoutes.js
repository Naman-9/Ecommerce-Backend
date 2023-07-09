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
    // .get('/update/test', async(req, res) =>{
    //     // for adding discount rice to existing data
    //     const products = await Product.find({});
    //     for(let product of products) {
    //         product.discountPrice = Math.round(product.price * ( 1- product.discountPercentage / 100));
    //         await product.save();
    //         console.log(product.title+ 'updated')
    //     }
    //     res.send('ok');
    // })
    // ;

exports.router = router; 