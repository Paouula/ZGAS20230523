const branchesControllers = {};
import branches from "../models/branches.js";
import branchesModel from "../models/branches.js";

//SELECT 
branchesControllers.getBranches = async (req, res) => {
    const branches = await branchesModel.find()
    res.json(branches)
}

//INSERT
branchesControllers.insertBranches = async (req, res) => {
    const {name, address, telephone, schedule} = req.body;
    const newBranches = new branchesModel({name, address, telephone, schedule})
    await newBranches.save()
    res.json({message: "Branches saved"})
}

//DELETE
branchesControllers.deleteBranches = async (req, res) => {
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branches delete"})
}

//UPDATE
branchesControllers.updateBranches = async (req, res) => {
    const {name, address, telephone, schedule} = req.body;
    const updateBranches = await branchesModel.findByIdAndUpdate(req.params.id, 
        {name, address, telephone, schedule}, {new:true})
    res.json({message: "Branches update"})
}

export default branchesControllers;