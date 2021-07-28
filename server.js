if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// IMPORT LIBRARIES
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const app = express();

// SET VIEWS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// USE STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// GET ROUTES
const indexRoute = require("./routes/index");

// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

// USE ROUTES MIDDLEWARE
app.use("/", indexRoute);

app.listen(process.env.PORT || 3000);
