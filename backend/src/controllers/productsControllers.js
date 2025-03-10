/*
Este archivo tiene los metodos del CRUD */

//Crea un array de funciones
const productsControllers = {};
import products from "../models/products.js";
import productsModel from "../models/products.js";

//SELECT 
productsControllers.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}

//INSERT
productsControllers.insertProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const newProducts = new productsModel({name, description, price, stock})
    await newProducts.save()
    res.json({message: "Products saved"})
}

//DELETE
productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Products delete"})
}

//UPDATE
productsControllers.updateProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id, 
        {name, description, price, stock}, {new:true})
    res.json({message: "Products update successfully"})
}

export default productsControllers;

