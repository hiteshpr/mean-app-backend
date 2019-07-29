const express = require('express');
const router = express.Router();


const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);
router.get('/testagain', product_controller.testagain);
// router.post('/create', product_controller.product_create);
// router.get('/products', product_controller.product_details);
// router.put('/:id/update', product_controller.product_update);


module.exports = router;
