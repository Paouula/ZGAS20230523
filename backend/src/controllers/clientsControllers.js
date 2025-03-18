const clientsControllers = {};

import clients from "../models/clients.js";
import clientsModel from "../models/clients.js";

//SELECT 
clientsControllers.getClients = async (req, res) => {
    const clients = await clientsModel.find()
    res.json(clients)
}

//INSERT
clientsControllers.insertClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const newClients = new clientsModel({name, lastName, birthday, email, password, telephone, dui, isVerified})
    await newClients.save()
    res.json({message: "Clients saved"})
}

//DELETE
clientsControllers.deleteClients = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Clients delete"})
}

//UPDATE
clientsControllers.updateClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const updateProducts = await clientsModel.findByIdAndUpdate(req.params.id, 
        {name, lastName, birthday, email, password, telephone, dui, isVerified}, {new:true})
    res.json({message: "Clients update"})
}

export default clientsControllers;