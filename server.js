const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const middleware = jsonServer.defaults({
  static: path.join(__dirname, "public", "index.html"),
});
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3000;

const app = jsonServer.create();
app.use("/db", middleware, router);

app.use(express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`server running on port ${port}`));
