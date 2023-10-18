const express = require("express");
const router = express.Router();
const elasticController = require("../controllers/elasticController");

router.get("/randompoem",elasticController.getRandomPoem);

module.exports = router;