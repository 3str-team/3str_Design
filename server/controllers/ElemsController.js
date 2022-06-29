const { Query } = require("../db");

class ElemsController {
  async getElems(req, res) {
    let sql = "SELECT * FROM elements";
    res.send(await Query(sql));
  }
}

module.exports = new ElemsController();
