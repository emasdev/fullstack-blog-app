import express from "express";
import { addPost, getPost, getPosts, search } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.post("/search", search);

export default router;
