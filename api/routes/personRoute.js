const { Router } = require("express");
const PersonController = require("../controllers/PersonController");

const router = Router();

router.get("/person", PersonController.getPersonAll);
router.get("/person/:id", PersonController.getPersonId);
router.post("/person", PersonController.createPerson);
router.put("/person/:id", PersonController.updatePerson);
router.delete("/person/:id", PersonController.deletePerson);

module.exports = router;
