const express = require("express");
const router = express.Router();
const elasticController = require("../controllers/elasticController");

router.get("/randompoem",elasticController.getRandomPoem);
router.get("/search",elasticController.search);
router.get("/getAllPoems",elasticController.getAllPoems);

module.exports = router;