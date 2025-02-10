const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// import returnString from "./js/test.js";

app.use("/JS", express.static(path.join(__dirname, "JS")));

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
  // res.render("main");
  res.render("practice1");
});

app.get("/getForm", (req, res) => {
  // get 요청은 req.query에 담겨서 옴
  console.log(req.query, "요청 왔니?");
  // res.render("result", { title: "GET 요청 결과", userinfo: req.query });

  res.render("search", {
    title: "해당회원들",
    userinfo: req.query,
    test: returnString,
  });
});
app.post("/postForm", (req, res) => {
  // post 요청은 req.body에 담겨서 옴
  console.log(req.body, "요청 왔니?");
  // res.render("result", { title: "POST 요청 결과", userinfo: req.body });
  res.render("userlist", { title: "회원정보리스트", userinfo: req.body });
});

// app.get("/test", (req, res) => {
//   res.render("test");
// });
// app.get("/test2", (req, res) => {
//   res.render("test2");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
