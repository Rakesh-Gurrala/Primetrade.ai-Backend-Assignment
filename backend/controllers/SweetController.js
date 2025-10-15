import sweetModel from "../models/SweetModel.js"
import fs from 'fs'

// add sweet item

const addSweet = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const sweet = new sweetModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await sweet.save();
        res.json({success:true,message:"Sweet Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all sweet list
const listSweet = async (req, res) => {
    try {
        const sweets = await sweetModel.find({});
        res.json({success:true, data:sweets})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


// remove food item
const removeSweet = async (req, res) => {
    try {
        const sweet = await sweetModel.findById(req.body.id);
        // remove file if exists
        if (sweet && sweet.image) {
            fs.unlink(`uploads/${sweet.image}`, ()=>{});
        }
        await sweetModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Sweet Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {addSweet, listSweet, removeSweet}