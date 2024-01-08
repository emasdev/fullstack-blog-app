import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = "SELECT * FROM posts";

  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `user`, `titulo`, `contenido`, `fecha` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("¡No autenticado!");

  jwt.verify(token, "secret", (err, userInfo) => {
    if (err) return res.status(403).json("¡Token no valido!");

    const query =
      "INSERT INTO posts(`titulo`, `contenido`, `fecha`,`user_id`) VALUES (?)";

    const values = [
      req.body.titulo,
      req.body.contenido,
      req.body.fecha,
      userInfo.id,
    ];

    // console.log(values);

    db.query(query, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Se ha creado una entrada nueva.");
    });
  });
};
