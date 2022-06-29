const express = require("express");
const ElemsController = require("./controllers/ElemsController");
const UsersController = require("./controllers/UsersController");
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server listening ${PORT}`);
});

app.get("/api/elems", ElemsController.getElems);

app.get("/api/users", UsersController.getUsers);
app.get("/api/users/:id", UsersController.getUserById);
app.post("/api/login", UsersController.login);
app.post("/api/registration", UsersController.registration);
