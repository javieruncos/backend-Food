import { validationResult } from "express-validator";
import { Usuario } from "../models/usuarios";
import bcrypt from "bcryptjs";

export const crearUsuario = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
      });
    }

    const { email, password } = req.body;
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }

    usuario = new Usuario(req.body);
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    await usuario.save();

    res.status(201).json({
      mensaje: "usuario creado correctamente",
      usuario: usuario.email,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "error al intentar crear un usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errores: errors.array(),
      });
    }

    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        mensaje: "usuario o password invalidos",
      });
    }

    const passwordValido = bcrypt.compareSync(password,usuario.password);

    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "usuario o password invalidos",
      });
    }

    res.status(200).json({
      mensaje: "el usuario existe",
      uid: usuario._id,
      nombre: usuario.nombre,
      perfil: usuario.perfil,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o password invalidos",
    });
  }
};
