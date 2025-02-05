const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", recipeRoutes);

app.listen(port, () => {
  console.log("Server running on render");
});
