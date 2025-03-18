const evaluationsControllers = {};

import evaluations from "../models/evaluations.js";
import evaluationsModel from "../models/evaluations.js";

//SELECT 
evaluationsControllers.getEvaluations = async (req, res) => {
    const evaluations = await evaluationsModel.find().populate("idEmployees");
    res.json(evaluations)
}

//INSERT 
evaluationsControllers.insertEvaluations = async (req, res) => {
    const {comment, grade, role, idEmployee} = req.body;
    const newEvaluations = new evaluationsModel({comment, grade, role, idEmployee})
    await newEvaluations.save()
    res.json({message: "Evaluation saved"})
}

//DELETE 
evaluationsControllers.deleteEvaluations = async (req, res) => {
    await evaluationsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Evaluation delete"})
}

//UPDATE
evaluationsControllers.updateEvaluations = async (req, res) => {
    const {comment, grade, role, idEmployee} = req.body;
    await evaluationsModel.findByIdAndUpdate(
        req.params.id,
        {comment, grade, role, idEmployee},
        {new: true}
    );
    res.json({message:"evaluation update"});
};

export default evaluationsControllers;

