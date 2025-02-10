const express = require("express");
const app = express();
const port = 3000;
// const path = require("path");

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴(객체형태: {})
app.use(express.urlencoded({ extended: true }));
// json
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views", path.join(__dirname, "/"));

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.render("main");
});

app.get("/getForm", (req, res) => {
  console.log(req.query, "요청 왔니?");
  res.render("result", { title: "GET 요청 결과", userinfo: req.query });
});

app.get("/test", (req, res) => {
  res.render("test");
});
app.get("/test2", (req, res) => {
  res.render("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
