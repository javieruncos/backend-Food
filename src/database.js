import mongoose from "mongoose";


const url = "mongodb+srv://JavierSrfc:Riversrfc1010@cluster0.3kg4e1g.mongodb.net/food";
// const url = "mongodb://localhost:27017/street-food";
mongoose.connect(url);

const conexion = mongoose.connection;
conexion.once("open",()=>{
    console.log("base de datos conectada")
})


