const express = require("express");
const router = express.Router();
const elasticController = require("../controllers/elasticController");

router.get("/randompoem",elasticController.getRandomPoem);
router.get("/search",elasticController.search);

module.exports = router;