const {
  createServiceView,
  serviceView,
} = require("../controllers/serviceViewController");

const router = require("express").Router();

router.post("/create", createServiceView);
router.get("/", serviceView);

module.exports = router;
