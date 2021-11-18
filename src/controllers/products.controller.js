const Product = require('../models/products.model')


const getProducts = async (req, reply) => {
     const products = await Product.find();
     return products;
};

const getProduct = async (req, reply) => {
     console.log(req.params.id);
     const product = await Product.findById(req.params.id);
     return reply.code(200).send(product);
};

const createProduct = async (req, reply) => {
     const newProduct = new Product(req.body)
     await newProduct.save();
     reply.code(201).send(newProduct);
};

const deleteProduct = async (req, reply) => {
     await Product.findByIdAndDelete(req.params.id);
     reply.code(204).send();
};

const updateProduct = async (req, reply) => {

     try {
     const Product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true
     });
     reply.code(200).send(Product);
     } catch (error) {
          reply.code(500).send(error);
     }

};

module.exports = {
     getProducts,
     getProduct,
     createProduct,
     deleteProduct,
     updateProduct,
};