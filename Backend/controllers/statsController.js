const SustainabilityData = require('../models/SustainabilityData');
const MonthlyStats = require('../models/MonthlyStats');

const getYearlyStats = async (req, res) => {
    try {
        const yearlyStats = await SustainabilityData.find({})
            .sort({ year: 1 }) // Sort by year in ascending order
            .lean(); // Convert mongoose documents to plain JavaScript objects

        if (!yearlyStats || yearlyStats.length === 0) {
            return res.status(404).json({ message: 'No yearly stats found' });
        }

        res.json(yearlyStats);
    } catch (error) {
        console.error('Error fetching yearly stats:', error);
        res.status(500).json({ message: 'Server error when fetching yearly stats' });
    }
};

const getMonthlyStats = async (req, res) => {
    try {
        const monthlyStats = await MonthlyStats.find({})
            .lean();

        if (!monthlyStats || monthlyStats.length === 0) {
            return res.status(404).json({ message: 'No monthly stats found' });
        }

        // Sort months in chronological order
        const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        monthlyStats.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

        res.json(monthlyStats);
    } catch (error) {
        console.error('Error fetching monthly stats:', error);
        res.status(500).json({ message: 'Server error when fetching monthly stats' });
    }
};

module.exports = { getYearlyStats, getMonthlyStats };
