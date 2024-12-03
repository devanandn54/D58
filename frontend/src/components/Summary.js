import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import { TreePine, TrendingUp, Users, Calendar } from "lucide-react";

const Summary = () => {
  const [yearlyData, setYearlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const COLORS = ['#4ade80', '#60a5fa', '#f97316'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/stats/yearly-stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch data");
        const jsonData = await response.json();
        setYearlyData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  // Transform the resource allocation data for the pie chart
  const getResourceData = (yearData) => {
    if (!yearData || !yearData.resourceAllocation) return [];
    
    return [
      { name: 'Renewable Energy', value: yearData.resourceAllocation.renewableEnergy },
      { name: 'Water Conservation', value: yearData.resourceAllocation.waterConservation },
      { name: 'Waste Management', value: yearData.resourceAllocation.wasteManagement }
    ];
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="text-xl text-green-600">Loading...</div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="text-xl text-red-600">Error: {error}</div>
    </div>
  );

  // Get the most recent year's resource allocation data
  const resourceUsageData = getResourceData(yearlyData[yearlyData.length - 1]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-green-500 rounded-lg text-white">
            <TrendingUp size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Sustainability Progress Overview
          </h1>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Yearly Progress Chart */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Yearly Progress Metrics</h2>
            <div className="h-80">
              <ResponsiveContainer>
                <LineChart data={yearlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} />
                  <Legend />
                  <Line type="monotone" dataKey="greenScore" stroke="#4ade80" strokeWidth={2} name="Green Score" />
                  <Line type="monotone" dataKey="studentParticipation" stroke="#60a5fa" strokeWidth={2} name="Student Participation" />
                  <Line type="monotone" dataKey="sustainabilityEvents" stroke="#f97316" strokeWidth={2} name="Events" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Resource Distribution */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Resource Allocation</h2>
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={resourceUsageData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {resourceUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <TreePine className="text-green-600" />
                <h3 className="font-semibold text-gray-800">Environmental Impact</h3>
              </div>
              <p className="text-gray-600">Latest green score: {yearlyData[yearlyData.length - 1]?.greenScore || 'N/A'}</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="text-blue-600" />
                <h3 className="font-semibold text-gray-800">Student Engagement</h3>
              </div>
              <p className="text-gray-600">Current participation: {yearlyData[yearlyData.length - 1]?.studentParticipation || 'N/A'} students</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="text-orange-600" />
                <h3 className="font-semibold text-gray-800">Event Growth</h3>
              </div>
              <p className="text-gray-600">Total events this year: {yearlyData[yearlyData.length - 1]?.sustainabilityEvents || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;