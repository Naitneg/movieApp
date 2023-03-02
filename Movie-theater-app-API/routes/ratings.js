import express from "express";
import { getRatings, createRating } from "../controllers/rating.js";
import knex from "knex";

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

router.get("/", getRatings(db));
router.post("/", createRating(db));
export default router;
