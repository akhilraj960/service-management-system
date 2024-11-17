const { adminLogin } = require("../controllers/authController");

const router = require("express").Router();

router.post("/admin/login", adminLogin);

module.exports = router;
