const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/adress", require("./AdressRoutes"));

module.exports = router;
