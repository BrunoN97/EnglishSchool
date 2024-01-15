const { Router } = require("express");
const ClassController = require("../controllers/ClassController");

const router = Router();

router.get("/class", ClassController.getClassAll);
router.get("/class/:id", ClassController.getClassId);
router.post("/class", ClassController.createClass);
router.put("/class/:id", ClassController.updateClass);
router.delete("/class/:id", ClassController.deleteClass);

module.exports = router;
