const router = require("express").Router();
const studentControllers = require("../controllers/controllerAll");

router.post("/c", studentControllers.studData_create);
router.get("/get", studentControllers.studData);
router.get("/:studentId", studentControllers.studData_details);
router.put("/update");
router.delete("/delete");

module.exports = router;