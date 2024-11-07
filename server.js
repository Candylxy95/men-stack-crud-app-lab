require("dotenv").config();

const express = require("express");
const connectDB = require("./src/db/db");
const gymRouter = require("./src/routers/gyms");
const methodOverride = require("method-override");
const { findGymById } = require("./src/controllers/gyms");
const path = require("path");

const app = express();
connectDB();

app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/gyms/new", (req, res) => {
  res.render("gyms/new.ejs");
});

app.get("/gyms/:id/edit", findGymById);

app.use("/", gymRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
