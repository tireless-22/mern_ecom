const express = require("express");
const router = require("express").Router();
const jwt=require("jsonwebtoken")
const User=require("../models/User")
router.use(express.json());
const CryptoJS=require("crypto-js")

router.post("/", (req, res) => {
	res.send("hello");
})

router.post("/register", async(req, res) => {
	const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
  });
	try {
		const savedUser =await newUser.save();
		res.json(savedUser)
		res.status(201)
		
	}
	catch (e) {
		res.status(500).json(e);
		console.log(err);

	}
})

// login

router.post("/login", async (req, res) => {
	try {
    // res.json("hello")
    // https://www.npmjs.com/package/crypto-js

    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong username");

    // we are decrypting the password that we saved in database
    var bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    originalText !== req.body.password &&
      res.status(401).json("wrong password");

    // https://www.npmjs.com/package/jsonwebtoken
		// we will create a token when the user is logged in
		// we will put the info like user_id and some of the things in that token
		// we will verify that token every time when any body makes a request
		
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "1h" }
    );

    res.json({ user, accessToken }).status(201);

    // checking the user entered password with the password that we saved in db
  }
	catch (e) {
		console.log(e);
		
	}

	res.send("hello this is from login");

})




module.exports = router;

