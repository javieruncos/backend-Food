import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import productoRouter from "./routes/productos.routes";
import usuarioRouter from "./routes/usuarios.routes"
import "./database"



//creamos una instancia de express
const app = express()
//configurar un puerto
app.set("port",process.env.PORT || 4003)
app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

//midlewares 
app.use(cors()); //permite peticones remotas
//permiten interpretar el formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"../public")))
//rutas 
app.get("/prueba",(req,res)=>{
    res.send("esto es una prueba de una peticion get")

})

app.use("/apifood",productoRouter);
app.use("/apifood/auth",usuarioRouter,)