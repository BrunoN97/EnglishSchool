const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

// ==================== Rotas para Pessoas ====================

router.get("/person", PersonController.getPersonAll);
router.get("/person/:id", PersonController.getPersonId);
router.post("/person", PersonController.createPerson);
router.put("/person/:id", PersonController.updatePerson);
router.delete("/person/:id", PersonController.deletePerson);

// ==================== Rotas para Matriculas ====================

router.get(
  "/person/:studentId/registration/:registrationId",
  PersonController.getRegistrationId
);
router.get(
  "/person/:studentId/registration",
  PersonController.getRegistrationForPerson
);
router.post(
  "/person/:student_id/registration",
  PersonController.createRegistration
);
router.put(
  "/person/:studentId/registration/:registrationId",
  PersonController.updateRegistration
);
router.delete(
  "/person/:studentId/registration/:registrationId",
  PersonController.deleteRegistration
);

module.exports = router;
