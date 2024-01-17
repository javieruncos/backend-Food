import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();
router.route("/productos").get(listarProductos).post(crearProducto)
router.route("/productos/:id")
.get(obtenerProducto)
.put(editarProducto)


export default router;