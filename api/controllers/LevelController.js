const database = require("../models");

// ========== Get todas os niveis ==========

class LevelController {
  static async getLevelAll(req, res) {
    try {
      const allLevel = await database.Niveis.findAll();
      return res.status(200).json(allLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Get Pessoa pro ID ==========

  static async getLevelId(req, res) {
    const { id } = req.params;
    try {
      const oneLevel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(oneLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Create Pessoa ==========

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const newLevelCreate = await database.Niveis.create(newLevel);
      return res.status(200).json(newLevel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Update Pessoa ==========

  static async updateLevel(req, res) {
    const { id } = req.params;
    const updateLevel = req.body;
    try {
      await database.Niveis.update(updateLevel, {
        where: { id: Number(id) },
      });
      const LevelUpdated = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(LevelUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Delete Pessoa ==========

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ mensagem: `Level com id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = LevelController;
