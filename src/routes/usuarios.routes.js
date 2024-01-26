import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/usuarios.controller";
import { check } from "express-validator";


const router = Router();

router.route("/usuarios/crear").post(
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
);

router.route("/usuarios/login").post([
    check("email").notEmpty().withMessage("este campo es requerido"),
    check("password").notEmpty().withMessage("este campo es requerido")
],login)


router.route("/usuarios").get(listarUsuarios)


export default router;
