import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controller";
import { check } from "express-validator";
import validarJWT from "../helpers/validarJWT";


const router = Router();

router.route("/usuarios").post(
  [
    check("nombre")
      .notEmpty()
      .withMessage("el nombre es obligatorio")
      .isLength({ min: 2, max: 70 })
      .withMessage("la cantidad minima de caracteres es de 2"),
    check("apellido")
      .notEmpty()
      .withMessage("este es un campo obligatorio")
      .isLength({ min: 2, max: 70 })
      .withMessage("la cantidad minima de caracteres es de 8"),
    check("email")
      .notEmpty()
      .withMessage("este es un campo obligatorio"),
    check("password")
      .notEmpty()
      .withMessage("este es un campo obligatorio")
      .isLength({ min: 8, max: 16 })
      .withMessage("la cantidad minima de caracteres es de 8"),
    check("perfil").notEmpty().withMessage("este es un campo obligatorio"),
  ],
  crearUsuario
).get(listarUsuarios);

router.route("/usuarios/login").post([ 
    check("email").notEmpty().withMessage("este campo es requerido"),
    check("password").notEmpty().withMessage("este campo es requerido")
],login)


export default router;
