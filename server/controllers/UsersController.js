const { Query } = require("../db");

class UsersController {
  async getUsers(req, res) {
    let sql = "SELECT * FROM users";
    res.json(await Query(sql));
  }

  async getUserById(req, res) {
    let data = [req.params.id];
    let sql = "SELECT * FROM users WHERE userID = ?";
    res.json(await Query(sql, data));
  }

  async login(req, res) {
    try {
      let data = [req.body.email, req.body.password];
      let sql = "SELECT * FROM users WHERE email = ? AND password = ?";
      let response = await Query(sql, data);
      console.log(response);
      if (response.length == 1) {
        res.status(200).json(response);
      } else {
        res.status(400).json(false);
      }
    } catch (err) {
      console.log("Login Error:", err);
    }
  }

  async registration(req, res) {
    try {
      // TODO: сделать валидацию req.body
      // TODO: сделать проверку капчи
      // TODO: сделать верификацию почты
      // TODO: добавить JWT
      let data = [Date.now(), req.body.name, req.body.email, req.body.password];

      if (req.body.password != req.body.passwordAgain) {
        res.json("Введённые пароли не совпадают");
      }

      let chechEmailQuery = "SELECT * FROM users WHERE email = ?";
      let checkEmailResponse = await Query(chechEmailQuery, [req.body.email]);
      let freeEmail = checkEmailResponse.length == 0 ? true : false;

      if (freeEmail) {

        /* тут будет функция валидации email и name */

        let insertQuery =
          "INSERT INTO users (userID, name, email, password) VALUES (?, ?, ?, ?)";
        await Query(insertQuery, data);
        res.redirect(`/api/users/${data[0]}`);
      } else {
        res.json("Такой Email уже используется");
      }
    } catch (err) {
      console.log("Reg Error:", err);
    }
  }
}

module.exports = new UsersController();
