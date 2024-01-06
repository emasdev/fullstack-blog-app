import { db } from "../db.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // return res.status(200).json(req.body);

  // checar is existe usuario
  const query = "SELECT * FROM users WHERE user = ?";
  db.query(query, [req.body.user], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Este usuario ya existe");

    // Hash password y crear usuario
    const saltRounds = 10;
    const myPlaintextPassword = req.body.password;

    bcryptjs.genSalt(saltRounds, function (err, salt) {
      bcryptjs.hash(myPlaintextPassword, salt, function (err, hash) {
        // Store hash in your password DB.
        const query = "INSERT INTO users(user,password) VALUES (?)";
        const values = [[req.body.user, hash]];

        db.query(query, values, (err, data) => {
          if (err) {
            return res.json(err);
          }
          return res.status(200).json("El usuario se ha creado");
        });
      });
    });
  });
};

export const login = (req, res) => {
  const query = "SELECT * FROM users WHERE user = ?";

  db.query(query, [req.body.user], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json("No se encontró el usuario");

    bcryptjs.compare(
      req.body.password,
      data[0].password,
      function (err, result) {
        if (result) {
          const token = jwt.sign({ id: data[0].id }, "secret");
          const { password, ...other } = data[0];

          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json(other);
        } else {
          return res.status(400).json("Usuario y/o contraseña equivocados");
        }
        // result == true
      }
    );
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("El usuario ha cerrado sesión.");
};
