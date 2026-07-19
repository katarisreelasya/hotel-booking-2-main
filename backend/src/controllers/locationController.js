const indianStates = require('../data/indianStates');

exports.getStates = (req, res) => {
    const states = indianStates.map(state => state.state);
    res.json(states);
};

exports.getDistricts = (req, res) => {
    const { state } = req.query;
    const stateData = indianStates.find(item => item.state === state);
    if (stateData) {
        res.json(stateData.districts);
    } else {
        res.status(404).json({ message: "State not found" });
    }
};
