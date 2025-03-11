/*
Campos: 
  name
  lastName
  birthday
  email
  password
  telephone
  dui
  isVerified
*/

import { Schema, model } from "mongoose";

const clientsSchema = Schema({
    name: {
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    birthday:{
        type: Date,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
        minLength: 8
    },
    telephone:{
        type: String,
        require: true
    },
    dui:{
        type: Number,
        requiere: true,
        min: 9
    },
    isVerifid:{
        type: Boolean,
        require: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Clients", clientsSchema);