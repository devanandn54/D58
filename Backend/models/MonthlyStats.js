const mongoose = require('mongoose');

const monthlyStatsSchema = new mongoose.Schema({
    month: String,
    eventCount: Number,
    studentAttendance: Number,
    sustainabilityScore: Number,
    eventTypes: {
        workshops: Number,
        seminars: Number,
        cleanups: Number,
        exhibitions: Number
    },
    performanceMetrics: {
        energy: {
            target: Number,
            achieved: Number 
        },
        water: {
            target: Number,
            achieved: Number
        },
        waste: {
            target: Number,
            achieved: Number
        },
        transport: {
            target: Number,
            achieved: Number
        },
        food: {
            target: Number,
            achieved: Number
        },
        buildings: {
            target: Number,
            achieved: Number
        }
    }
});

module.exports = mongoose.model('MonthlyStats', monthlyStatsSchema)