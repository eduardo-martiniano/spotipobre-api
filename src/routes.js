const express = require('express');
const spotipobreController = require('./controllers/spotipobreController');
const router = express.Router()

router.get("/", (req, res) => res.json("online"));
router.get("/downloadmp3", spotipobreController.downloadmp3);
module.exports = router