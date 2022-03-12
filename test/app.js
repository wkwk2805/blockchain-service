// 백엔드 부분 (컴퓨터2)
const express = require("express");
const app = express();

app.post("/", (request, response) => {
  response.json({ name: "Alice", age: 20 });
}); // select

app.delete(); // delete

app.patch(); // update

app.put(); // insert

app.listen(3000, () => {
  console.log("server");
});
