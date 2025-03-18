/*Campos:
Comment
Grade
Role
idEmployee */

import {Schema, model} from "mongoose";

const evaluationsSchema = new Schema(
    {
        comment: {
            type: String,
            require: true
        },
        grade: {
            type: Number,
            requiere: true
        },
        role: {
            type: String,
            require: true
        },
        idEmployees:{
            type: Schema.Types.ObjectId,
            ref: "employees",
            requiere: true
        }
    }, {
        timestamps: true,
        strict: false
    }
);

export default model("Evaluations", evaluationsSchema);