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

  // ==============================================================================================
  // ========================================= MATRICULAS =========================================

  // ========== Get Matricula pro ID ==========

  static async getRegistrationId(req, res) {
    const { studentId, registrationId } = req.params;
    try {
      const oneRegistration = await database.Matriculas.findOne({
        where: { id: Number(registrationId), student_id: Number(studentId) },
      });
      return res.status(200).json(oneRegistration);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Get todas matriculas de uma pessoa ==========

  static async getRegistrationForPerson(req, res) {
    const { studentId } = req.params;
    try {
      const allRegistration = await database.Matriculas.findAll({
        where: { student_id: Number(studentId) },
      });
      return res.status(200).json(allRegistration);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Create Matricula ==========

  static async createRegistration(req, res) {
    const { student_id } = req.params;
    const newRegistration = { ...req.body, student_id: Number(student_id) };
    try {
      const newRegistrationCreated = await database.Matriculas.create(
        newRegistration
      );
      return res.status(200).json(newRegistrationCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Update Matricula ==========

  static async updateRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    const updateRegistration = req.body;
    try {
      await database.Matriculas.update(updateRegistration, {
        where: { id: Number(registrationId), student_id: Number(studentId) },
      });
      const registrationUpdated = await database.Matriculas.findOne({
        where: { id: Number(registrationId) },
      });
      return res.status(200).json(registrationUpdated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // ========== Delete Matricula ==========

  static async deleteRegistration(req, res) {
    const { studentId, registrationId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(registrationId), student_id: Number(studentId) },
      });
      return res
        .status(200)
        .json({ mensagem: `Matricula com id ${registrationId} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;
