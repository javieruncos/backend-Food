import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();
router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre del producto es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
          "El nombre del producto debe tener entre 2 y 100 caracteres"
        ),
      check("precio")
        .notEmpty()
        .withMessage("el precio es un dato obligatorio")
        .isNumeric()
        .withMessage("el precio debe ser un Numero")
        .custom((value) => {
          if (value >= 5 && value <= 10000) {
            return true;
          } else {
            throw new Error("el precio debe estar entre 5 y 10000");
          }
        }),
      check("imagen")
        .notEmpty()
        .withMessage("la imagen es un dato obligatorio")
        .isURL()
        .withMessage("la imagen debe ser una url")
        .isLength({ min: 40, max: 200 })
        .withMessage(
          "la cantidad de caracteres de la url debe estar entre 40 y 200"
        ),
      check("categoria")
        .notEmpty()
        .withMessage("La categoria es un dato obligatorio"),
      check("ingredientes")
        .notEmpty()
        .withMessage("la lista de ingredientes debe ser un array obligatoriamente"),
        check("descripcion").notEmpty()
        .withMessage("la descripcion es un dato obligatorio")
        .isLength({min:50,max:1000})
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;
