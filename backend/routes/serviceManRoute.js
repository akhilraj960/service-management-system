const {
  createServiceMan,
  getServiceMan,
  deleteServiceMan,
} = require("../controllers/serviceManController");

const router = require("express").Router();

router.post("/create", createServiceMan);
router.delete("/:id", deleteServiceMan);
router.get("/", getServiceMan);

module.exports = router;
