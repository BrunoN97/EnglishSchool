const database = require("../models");

// ========== Get todas as Classes ==========

class ClassController {
  static async getClassAll(req, res) {
    try {
      const allClass = await database.Turmas.findAll();
      return res.status(200).json(allClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Get Classe pro ID ==========

  static async getClassId(req, res) {
    const { id } = req.params;
    try {
      const oneClass = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(oneClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Create Classe ==========

  static async createClass(req, res) {
    const newClass = req.body;
    try {
      const newClassCreate = await database.Turmas.create(newClass);
      return res.status(200).json(newClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Update Classe ==========

  static async updateClass(req, res) {
    const { id } = req.params;
    const updateClass = req.body;
    try {
      await database.Turmas.update(updateClass, {
        where: { id: Number(id) },
      });
      const ClassUpdated = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(ClassUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Delete Classe ==========

  static async deleteClass(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ mensagem: `Turma com id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClassController;
