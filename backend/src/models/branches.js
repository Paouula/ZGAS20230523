/*Sucursales
  name
  address
  telephone
  schedule */

import { Schema, model } from "mongoose";

const branchesSchema = Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    telephone:{
        type: String,
        require: true,
        minLength: 8,
        maxLength: 12
    },
    schedule: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Branches", branchesSchema);