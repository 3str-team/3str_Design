const { Query } = require("../db");

class ElemsController {
  async getElems(req, res) {
    let sql = "SELECT * FROM elements";
    res.json(await Query(sql));
  }

  async getElemById(req, res) {
    let data = [req.params.id];
    let sql = "SELECT * FROM elements WHERE id = ?";
    res.json(await Query(sql, data));
  }

  async getElemsByType(req, res) {
    let data = [req.params.type];
    let sql = "SELECT * FROM elements WHERE type = ?";
    res.json(await Query(sql, data));
  }

  async getElemsByAuthorId(req, res) {
    const data = [req.params.authorId];
    let sql = "SELECT * FROM elements WHERE authorId = ?";
    res.json(await Query(sql, data));
  }

  async getElemsByAuthorAndType(req, res) {
    const data = [req.params.authorId, req.params.type];
    let sql = "SELECT * FROM elements WHERE authorId = ? AND type = ?";
    res.json(await Query(sql, data));
  }
}

module.exports = new ElemsController();
