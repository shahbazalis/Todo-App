import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/todos", todoRoutes);

const CONNECTION_URL =
  "mongodb+srv://Shahbaz:finland2019@cluster0.yzfzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
