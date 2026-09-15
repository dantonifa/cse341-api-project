const express = require("express");
const router = express.Router();

// Route all requests going to /contacts to the contacts routing file
router.use("/contacts", require("./contacts"));

module.exports = router;
