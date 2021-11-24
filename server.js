const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const HTML_routes = require("./routes/html-routes.js");
const API_routes = require("./routes/api-routes.js");
require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.mongoDB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(API_routes);
app.use(HTML_routes);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
