import express from "express"
import { addSweet, listSweet, removeSweet } from "../controllers/SweetController.js"
import multer from "multer"

const sweetRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

sweetRouter.post("/add", upload.single("image"), addSweet)
sweetRouter.get("/list",listSweet)
sweetRouter.post("/remove", removeSweet);

export default sweetRouter;