const mongoose = require('mongoose');
const SustainabilityData = require('../models/SustainabilityData');
const MonthlyStats = require('../models/MonthlyStats');
require('dotenv').config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Clear existing data
        await SustainabilityData.deleteMany({});
        await MonthlyStats.deleteMany({});

        // Seed yearly data
        const yearlyData = [
            {
                year: 2019,
                greenScore: 83,
                studentParticipation: 2435,
                sustainabilityEvents: 12,
                resourceAllocation: {
                    renewableEnergy: 53,
                    waterConservation: 12,
                    wasteManagement: 22
                }
            },
            {
                year: 2020,
                greenScore: 85,
                studentParticipation: 2500,
                sustainabilityEvents: 15,
                resourceAllocation: {
                    renewableEnergy: 60,
                    waterConservation: 15,
                    wasteManagement: 25
                }
            },
            {
                year: 2021,
                greenScore: 87,
                studentParticipation: 3000,
                sustainabilityEvents: 18,
                resourceAllocation: {
                    renewableEnergy: 62,
                    waterConservation: 18,
                    wasteManagement: 20
                }
            },
            {
                year: 2022,
                greenScore: 89,
                studentParticipation: 3080,
                sustainabilityEvents: 15,
                resourceAllocation: {
                    renewableEnergy: 67,
                    waterConservation: 23,
                    wasteManagement: 29
                }
            },
            {
                year: 2023,
                greenScore: 91,
                studentParticipation: 3169,
                sustainabilityEvents: 19,
                resourceAllocation: {
                    renewableEnergy: 69,
                    waterConservation: 27,
                    wasteManagement: 37
                }
            },
            
        ];
        await SustainabilityData.insertMany(yearlyData);

        // Seed monthly data
        const monthlyData = [
            {
                month: 'Jan',
                eventCount: 2,
                studentAttendance: 300,
                sustainabilityScore: 88,
                eventTypes: {
                    workshops: 35,
                    seminars: 25,
                    cleanups: 20,
                    exhibitions: 20
                },
                performanceMetrics: {
                    energy: { target: 120, achieved: 110 },
                    water: { target: 98, achieved: 130 },
                    waste: { target: 86, achieved: 130 },
                    transport: { target: 99, achieved: 100 },
                    food: { target: 85, achieved: 90 },
                    buildings: { target: 65, achieved: 85 }
                }
            },
            {
                month: 'Feb',
                eventCount: 3,
                studentAttendance: 280,
                sustainabilityScore: 85,
                eventTypes: {
                    workshops: 30,
                    seminars: 20,
                    cleanups: 25,
                    exhibitions: 25
                },
                performanceMetrics: {
                    energy: { target: 110, achieved: 105 },
                    water: { target: 95, achieved: 120 },
                    waste: { target: 80, achieved: 115 },
                    transport: { target: 90, achieved: 95 },
                    food: { target: 75, achieved: 80 },
                    buildings: { target: 60, achieved: 70 }
                }
            },
            {
                month: 'Mar',
                eventCount: 4,
                studentAttendance: 320,
                sustainabilityScore: 90,
                eventTypes: {
                    workshops: 40,
                    seminars: 30,
                    cleanups: 20,
                    exhibitions: 30
                },
                performanceMetrics: {
                    energy: { target: 125, achieved: 115 },
                    water: { target: 100, achieved: 135 },
                    waste: { target: 90, achieved: 125 },
                    transport: { target: 95, achieved: 100 },
                    food: { target: 85, achieved: 85 },
                    buildings: { target: 70, achieved: 75 }
                }
            },
            {
                month: 'Apr',
                eventCount: 5,
                studentAttendance: 350,
                sustainabilityScore: 92,
                eventTypes: {
                    workshops: 50,
                    seminars: 40,
                    cleanups: 30,
                    exhibitions: 25
                },
                performanceMetrics: {
                    energy: { target: 130, achieved: 120 },
                    water: { target: 105, achieved: 140 },
                    waste: { target: 95, achieved: 130 },
                    transport: { target: 100, achieved: 105 },
                    food: { target: 90, achieved: 95 },
                    buildings: { target: 75, achieved: 80 }
                }
            },
            {
                month: 'May',
                eventCount: 6,
                studentAttendance: 370,
                sustainabilityScore: 95,
                eventTypes: {
                    workshops: 60,
                    seminars: 50,
                    cleanups: 25,
                    exhibitions: 35
                },
                performanceMetrics: {
                    energy: { target: 135, achieved: 125 },
                    water: { target: 110, achieved: 150 },
                    waste: { target: 100, achieved: 140 },
                    transport: { target: 105, achieved: 110 },
                    food: { target: 95, achieved: 100 },
                    buildings: { target: 80, achieved: 90 }
                }
            },
            {
                month: 'Jun',
                eventCount: 7,
                studentAttendance: 400,
                sustainabilityScore: 97,
                eventTypes: {
                    workshops: 70,
                    seminars: 40,
                    cleanups: 35,
                    exhibitions: 30
                },
                performanceMetrics: {
                    energy: { target: 140, achieved: 130 },
                    water: { target: 115, achieved: 155 },
                    waste: { target: 105, achieved: 145 },
                    transport: { target: 110, achieved: 115 },
                    food: { target: 100, achieved: 105 },
                    buildings: { target: 85, achieved: 95 }
                }
            },
            {
                month: 'Jul',
                eventCount: 8,
                studentAttendance: 450,
                sustainabilityScore: 98,
                eventTypes: {
                    workshops: 80,
                    seminars: 45,
                    cleanups: 40,
                    exhibitions: 35
                },
                performanceMetrics: {
                    energy: { target: 145, achieved: 140 },
                    water: { target: 120, achieved: 160 },
                    waste: { target: 110, achieved: 150 },
                    transport: { target: 115, achieved: 120 },
                    food: { target: 105, achieved: 110 },
                    buildings: { target: 90, achieved: 100 }
                }
            },
            {
                month: 'Aug',
                eventCount: 9,
                studentAttendance: 480,
                sustainabilityScore: 99,
                eventTypes: {
                    workshops: 85,
                    seminars: 50,
                    cleanups: 45,
                    exhibitions: 40
                },
                performanceMetrics: {
                    energy: { target: 150, achieved: 145 },
                    water: { target: 125, achieved: 165 },
                    waste: { target: 115, achieved: 155 },
                    transport: { target: 120, achieved: 125 },
                    food: { target: 110, achieved: 115 },
                    buildings: { target: 95, achieved: 105 }
                }
            },
            {
                month: 'Sep',
                eventCount: 10,
                studentAttendance: 500,
                sustainabilityScore: 100,
                eventTypes: {
                    workshops: 90,
                    seminars: 55,
                    cleanups: 50,
                    exhibitions: 45
                },
                performanceMetrics: {
                    energy: { target: 155, achieved: 150 },
                    water: { target: 130, achieved: 170 },
                    waste: { target: 120, achieved: 160 },
                    transport: { target: 125, achieved: 130 },
                    food: { target: 115, achieved: 120 },
                    buildings: { target: 100, achieved: 110 }
                }
            },
            {
                month: 'Oct',
                eventCount: 11,
                studentAttendance: 520,
                sustainabilityScore: 102,
                eventTypes: {
                    workshops: 95,
                    seminars: 60,
                    cleanups: 55,
                    exhibitions: 50
                },
                performanceMetrics: {
                    energy: { target: 160, achieved: 155 },
                    water: { target: 135, achieved: 175 },
                    waste: { target: 125, achieved: 165 },
                    transport: { target: 130, achieved: 135 },
                    food: { target: 120, achieved: 125 },
                    buildings: { target: 105, achieved: 115 }
                }
            }
        ];
        await MonthlyStats.insertMany(monthlyData);

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedData();