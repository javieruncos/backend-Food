import mongoose,{Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        maxLength:70,
        minLength:2
    },
    apellido:{
      type:String,
      required:true,
      minLength:2,
      maxLength:70
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxLength:200
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:80
    },
    perfil:{
        type:String,
        required:true
    }
})

export const Usuario = mongoose.model("usuario",usuarioSchema)