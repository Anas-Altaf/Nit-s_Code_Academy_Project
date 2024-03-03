const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Express Stuff
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use("/favicon.ico", express.static("./static/crime-hacker-icon.png"));
// PUG Stuff
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// END POINTS
app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact", params);
});

app.listen(port, () => {
  console.log(`This App is Running on : http://localhost:${port}.`);
});
