import { response } from "express"
import mongoose from "mongoose"

const sweetSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String, required:true}
})

const sweetModel = mongoose.models.sweet || mongoose.model("sweet", sweetSchema)

export default sweetModel;