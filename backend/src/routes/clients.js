import express from "express";
import clientsControllers from "../controllers/clientsControllers";
import products from "../models/products";

const router = express.Router();

router.route("/")
.get(clientsControllers.getClients)
.post(clientsControllers.insertClients)

router.route.apply("/:id")
.put(clientsControllers.updateClients)
.delete(clientsControllers.deleteClients)

export default router;