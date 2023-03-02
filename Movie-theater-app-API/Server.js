import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import moviesRoute from "./routes/movies.js";
import ratingsRoute from "./routes/ratings.js";
import showRoute from "./routes/show.js";
import movietimeRoute from "./routes/movietime.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/ratings", ratingsRoute);
app.use("/api/show", showRoute);
app.use("/api/movietime", movietimeRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json(errorMessage);
});

app.listen(3000, () => {
  console.log("Connected to port 3000");
});
