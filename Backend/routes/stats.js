const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { getYearlyStats, getMonthlyStats } = require('../controllers/statsController');

router.get('/yearly-stats', verifyToken, getYearlyStats);
router.get('/monthly-stats', verifyToken, getMonthlyStats);

module.exports = router;