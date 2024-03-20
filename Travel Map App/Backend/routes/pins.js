const router = require("express").Router();
const Pin = require("../models/Pin");

// Create a pin

router.post("/", async (req, res) => {
	const newPin = new Pin(req.body)
	try {
		const savePin = await newPin.save();
		res.status(200).json(savePin);
	} catch (err) {
		res.status(500).json(err);
	}
})

// Get all pins

module.exports = router;