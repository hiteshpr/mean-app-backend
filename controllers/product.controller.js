const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.testagain = function (req, res) {
    res.send('Greetings Again from the Test controller!');
};


// exports.product_create = function (req, res) {
//     let product = new Product(
//         {
//             name: req.body.name,
//             price: req.body.price
//         }
//     );

//     product.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Product Created successfully')
//     })
// };
/* 
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
}; */

// exports.product_details =  function(req, res) {
//     Product.find({}, function(err, users) {
//       var userMap = {};
  
//       users.forEach(function(user) {
//         userMap[user._id] = user;
//       });
  
//       res.send(userMap);  
//     });
//   };



// exports.product_update = function (req, res) {
//     Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//         if (err) return next(err);
//         res.send('Product updated.');
//     });
// };