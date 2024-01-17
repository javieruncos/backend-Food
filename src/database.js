import mongoose from "mongoose";

const url = "mongodb://localhost:27017/street-food";
mongoose.connect(url);

const conexion = mongoose.connection;
conexion.once("open",()=>{
    console.log("base de datos conectada")
})