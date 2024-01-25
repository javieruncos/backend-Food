import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controller";
import { check } from "express-validator";

const router = Router();

router.route("/crear").post(
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

router.route("/").post(login)

export default router;
