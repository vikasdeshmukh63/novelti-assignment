const getPhoneCodes = require("../controllers/phoneCodeController");
const router = require("express").Router();

// get phone codes router 
router.route("/phonecodes").get(getPhoneCodes);

module.exports = router;