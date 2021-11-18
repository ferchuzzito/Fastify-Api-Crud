const productController = require('../controllers/products.controller')
const routes = [{
          url: '/products',
          method: "GET",
          handler: productController.getProducts,
     },
     {
          url: '/products/:id',
          method: "GET",
          handler: productController.getProduct,
     },
     {
          url: '/products',
          method: "POST",
          handler: productController.createProduct,
     },
     {
          url: '/product/:id',
          method: "DELETE",
          handler: productController.deleteProduct,
     },
     {
          url: '/product/:id',
          method: "PUT",
          handler: productController.updateProduct,
     },
]



module.exports = routes;