const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", recipeRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
