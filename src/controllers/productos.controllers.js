import e from "express"
import { Producto } from "../models/producto"
import { validationResult } from "express-validator"

export const listarProductos =async(req,res)=>{
   try {
    const productos =await Producto.find()
    res.status(200).json(productos)
    
   } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje:"error al listar productos"
    })
   }
}


export const crearProducto =async (req ,res)=>{
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      res.status(400).json({
        errores:errors.array()
      })
    }

    const productoNuevo = new Producto(req.body)
    await productoNuevo.save()
    res.status(201).json({
      mensaje:"el producto fue creado correctamente"
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje:"ocurrio un error al intentar crear el producto"
    })
  }
}

export const obtenerProducto = async(req,res)=>{
  try {
   const productoBuscado =await Producto.findById(req.params.id)
   res.status(200).json(productoBuscado)
   
  } catch (error) {
   console.log(error)
   res.status(404).json({
     mensaje:"error no se encontro el producto buscado"
   })
  }
}


export const editarProducto = async (req,res)=> {
    try {
      await Producto.findByIdAndUpdate(req.params.id,req.body)
      res.status(200).json({
        mensaje:"producto editado existosamente"
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        mensaje:"error al intentar editar un producto"
      })
    }
}

export const borrarProducto = async (req,res)=> {
    try {
       await Producto.findByIdAndDelete(req.params.id)
       res.status(200).json({
        mensaje:"el producto se elimino exitosamente"
       })
    } catch (error) {
      console.log(error)
      res.status(404).json({
        mensaje:"error al intentar eliminar un producto"
      })
    }
}