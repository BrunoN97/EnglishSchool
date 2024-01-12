const database = require("../models");

// ========== Get todas as pessoas ==========

class PersonController {
  static async getPersonAll(req, res) {
    try {
      const allPerson = await database.Pessoas.findAll();
      return res.status(200).json(allPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Get Pessoa pro ID ==========

  static async getPersonId(req, res) {
    const { id } = req.params;
    try {
      const onePerson = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(onePerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Create Pessoa ==========

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const newPersonCreate = await database.Pessoas.create(newPerson);
      return res.status(200).json(newPerson);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Update Pessoa ==========

  static async updatePerson(req, res) {
    const { id } = req.params;
    const updatePerson = req.body;
    try {
      await database.Pessoas.update(updatePerson, {
        where: { id: Number(id) },
      });
      const personUpdated = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(personUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Delete Pessoa ==========

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ mensagem: `Pessoa com id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;
