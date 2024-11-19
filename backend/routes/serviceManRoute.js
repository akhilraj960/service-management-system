const {
  createServiceMan,
  getServiceMan,
} = require("../controllers/serviceManController");

const router = require("express").Router();

router.post("/create", createServiceMan);
router.get("/", getServiceMan);

module.exports = router;
