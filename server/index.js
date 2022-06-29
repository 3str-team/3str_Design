const express = require("express");
const ElemsController = require("./controllers/ElemsController");
const UsersController = require("./controllers/UsersController");
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server listening ${PORT}`);
});

// TODO: разделить API на роутеры

app.get("/api/elems", ElemsController.getElems);
app.get("/api/elems/getById/:id", ElemsController.getElemById);
app.get("/api/elems/getByType/:type", ElemsController.getElemsByType);
app.get("/api/elems/getByAuthor/:authorId", ElemsController.getElemsByAuthorId);
app.get("/api/elems/getByAuthorAndType/:authorId/:type", ElemsController.getElemsByAuthorAndType);

app.get("/api/users", UsersController.getUsers);
app.get("/api/users/:id", UsersController.getUserById);
app.post("/api/login", UsersController.login);
app.post("/api/registration", UsersController.registration);
