const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", recipeRoutes);

app.listen(process.env.Node_server, () => {
  console.log("Server running on render");
});
