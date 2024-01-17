import mongoose,{Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type:String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:100
    },
    precio:{
        type:Number,
        required:true,
        min:5,
        max:10000
    },
    categoria:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true
    },
    ingredientes:{
        type:Array,
        requiered:true
    }
    
})

 export const Producto = mongoose.model("producto",productoSchema)