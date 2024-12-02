const mongoose = require('mongoose');


const sustainabilityDataSchema = new mongoose.Schema({
    year: Number,
    greenScore: Number,
    studentParticipation: Number,
    sustainabilityEvents: Number,
    resourceAllocation: {
        renewableEnergy: Number,
        waterConservation: Number,
        wasteManagement: Number
    }
});

module.exports = mongoose.model('SustainabilityData', sustainabilityDataSchema)