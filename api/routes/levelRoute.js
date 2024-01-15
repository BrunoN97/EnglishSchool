const { Router } = require("express");
const LevelController = require("../controllers/LevelController");

const router = Router();

router.get("/level", LevelController.getLevelAll);
router.get("/level/:id", LevelController.getLevelId);
router.post("/level", LevelController.createLevel);
router.put("/level/:id", LevelController.updateLevel);
router.delete("/level/:id", LevelController.deleteLevel);

module.exports = router;
