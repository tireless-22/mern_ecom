const express = require("express");
const router = require("express").Router();

router.post("/", (req, res) => {
	res.send("hello");
})

module.exports = router;










