const express = require("express");
const messCtrl = require("./controlers/messages_ctrl");
const baseURL = "/api/messages";

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get(baseURL, messCtrl.read);
app.post(baseURL, messCtrl.create);
app.put(`${baseURL}/:id`, messCtrl.update);
app.delete(`${baseURL}/:id`, messCtrl.delete);

app.listen(3001, () => {
  console.log("Server running at warp 3001!");
});
