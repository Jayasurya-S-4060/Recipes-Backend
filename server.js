const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();
const render_url = process.env.Node_server;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", recipeRoutes);

app.listen(render_url, () => {
  console.log("Server running on render");
});
