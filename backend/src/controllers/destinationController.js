const Destination = require('../models/destination');

// Get all destinations
exports.getAllDestinations = async (req, res) => {
	try {
		const destinations = await Destination.find();
		res.status(200).json(destinations);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Add a new destination
exports.addDestination = async (req, res) => {
	try {
		const destination = new Destination(req.body);
		await destination.save();
		res.status(201).json(destination);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
