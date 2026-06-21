const express = require("express");
const path = require("path");

const app = express();

// INI PENTING BANGET
app.use(express.static(path.join(__dirname, "public")));

// fallback route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
