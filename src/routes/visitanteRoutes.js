const express = require("express");
const router = express.Router();
const controller = require("../controllers/visitanteController");

router.get("/", async (req, res) => {
    res.send(await controller.listAll())
})

module.exports = router;