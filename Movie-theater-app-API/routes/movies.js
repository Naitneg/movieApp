import express from "express";
import knex from "knex";
import { createMovie, deleteMovie, getMovie, getMovies, updateMovie } from "../controllers/movie.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "123",
    database: "movieapp_database",
  },
});


router.post("/", createMovie(db));

router.put("/:id", updateMovie(db));

router.delete("/:id", deleteMovie(db));

router.get("/:id", getMovie(db));

router.get("/", getMovies(db));

export default router;
