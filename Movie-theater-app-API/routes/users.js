import express from "express";
import knex from "knex";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import {  verifyUser,verifyToken, verifyAdmin } from "../utils/verifyToken.js";

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


router.put("/:id",verifyUser, updateUser(db));

router.delete("/:id",verifyUser, deleteUser(db));

router.get("/:id",verifyUser, getUser(db));

router.get("/", getUsers(db));

export default router;
