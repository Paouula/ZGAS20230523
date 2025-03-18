const employeesControllers = {};

import employees from "../models/employees.js";
import employeesModel from "../models/employees.js";

//SELECT 
employeesControllers.getEmployees = async (req, res) => {
    const employees = await employeesModel.find()
    res.json(employees)
}

//INSERT
employeesControllers.insertEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const newEmployees = new employeesModel({name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified})
    await newEmployees.save()
    res.json({message: "Employees saved"})
}

//DELETE
employeesControllers.deleteEmployees = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Employees delete"})
}

//UPDATE
employeesControllers.updateEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const updateEmployees = await employeesModel.findByIdAndUpdate(req.params.id, 
        {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified}, {new:true})
    res.json({message: "Employees update"})
}

export default employeesControllers;