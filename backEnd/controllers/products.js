const Product = require('../models/productsModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
    const Products = await Product.find({}).sort({createdAt: -1})

    res.status(200).json(Products)
}


//get single products
const getProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such id found"})
    }
    const product = await Product.findById(id)

    if (!product) {
        return res.status(400).json({error: "No such product found"})
    }
    res.status(200).json(product)
}

// create new product
const createProduct = async (req, res) => {
    const {title, color, des} = req.body
    
    try {
        const productPost = await Product.create({title, color, des})
        res.status(200).json(productPost)
    }catch (error){
        res.status(400).json({error: error.message})

    }

}

// delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such id found"})
    }

    const product = await Product.findOneAndDelete({ _id: id})

    if (!product) {
        return res.status(400).json({error: "No such product found"})
    }
    res.status(200).json(product) 

}

// update a product
const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such id found"})
    }

    const product = await Product.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if (!product) {
        return res.status(400).json({error: "No such product found"})
    }
    res.status(200).json(product) 
}

module.exports = {
    createProduct, getProducts, getProduct, deleteProduct, updateProduct
}