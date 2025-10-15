import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gurralarakesh2002_db_user:Rakesh(2002)@cluster0.2c5xluz.mongodb.net/Sweet-Shop-Management-System').then(()=>console.log('DB Connected'));
}