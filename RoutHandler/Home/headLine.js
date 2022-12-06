const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { get_headline, post_headline } = require("../../helper/headline");

router.use(fileUpload());

router.post("/", post_headline);
router.get("/", get_headline);

module.exports = router;
