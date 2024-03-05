const express = require("express");
const { getProductData } = require("./products");
const { getUserData } = require("./users");
const app = express();

app.get("/", (req, res) => res.send("home page changed"));

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getProductData(id);
  return res.send(data);
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getUserData(id);
  return res.send(data);
});

app.listen(3000, () => console.log("server running at 3000....."));
