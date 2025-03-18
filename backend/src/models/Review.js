/*Campos:
Coments
Rating
idClient */

import {Schema, model} from "mongoose";

const reviewSchema = new Schema(
    {
        comment: {
            type: String,
            require: true
        },
        ratting:{
            type: Number,
            requiere: true,
            min: 1,
            max: 5
        },
        idClient:{
            type: Schema.Types.ObjectId,
            ref: "clients",
            requiere: true
        }
    }, {
        timestamps: true,
        strict: false
    }
);

export default model("Review", reviewSchema);