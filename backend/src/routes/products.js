/*Este archivo sirve para definir que metodos del crud va a tener 
mi ruta (/api/products)*/

import express from "express";
import productsControllers from "../controllers/productsControllers.js";

const router = express.Router();

router.route("/")
.get(productsControllers.getProducts)
.post(productsControllers.insertProducts)

router.route("/:id")
.put(productsControllers.updateProducts)
.delete(productsControllers.deleteProducts)

export default router;

