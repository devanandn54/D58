import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import { useAuth } from "../context/AuthContext";
import { BarChart2, PieChartIcon, Activity } from "lucide-react";

const Reports = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const COLORS = ['#4ade80', '#60a5fa', '#f97316', '#a855f7'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/stats/monthly-stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error("Failed to fetch data");
        const jsonData = await response.json();
        setMonthlyData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  // Transform data for event type distribution
  const getEventTypeData = (data) => {
    if (!data || !data[0]?.eventTypes) return [];
    const latestMonth = data[data.length - 1];
    return [
      { name: 'Workshops', value: latestMonth.eventTypes.workshops },
      { name: 'Seminars', value: latestMonth.eventTypes.seminars },
      { name: 'Clean-ups', value: latestMonth.eventTypes.cleanups },
      { name: 'Exhibitions', value: latestMonth.eventTypes.exhibitions }
    ];
  };

  // Transform data for performance metrics
  const getPerformanceData = (data) => {
    if (!data || !data[0]?.performanceMetrics) return [];
    const latestMonth = data[data.length - 1];
    const metrics = latestMonth.performanceMetrics;
    
    return Object.entries(metrics).map(([key, value]) => ({
      subject: key.charAt(0).toUpperCase() + key.slice(1),
      Target: value.target,
      Achieved: value.achieved,
      fullMark: Math.max(value.target, value.achieved) * 1.2
    }));
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

  const eventTypeData = getEventTypeData(monthlyData);
  const performanceData = getPerformanceData(monthlyData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-green-500 rounded-lg text-white">
            <BarChart2 size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Monthly Sustainability Report
          </h1>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Metrics */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Monthly Activity Metrics</h2>
            <div className="h-80">
              <ResponsiveContainer>
                <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} />
                  <Legend />
                  <Bar dataKey="eventCount" fill="#4ade80" name="Events" />
                  <Bar dataKey="studentAttendance" fill="#60a5fa" name="Attendance" />
                  <Bar dataKey="sustainabilityScore" fill="#f97316" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Event Distribution */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Event Type Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={eventTypeData}
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {eventTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Radar */}
          <div className="col-span-1 lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Performance Metrics</h2>
            <div className="h-80">
              <ResponsiveContainer>
                <RadarChart data={performanceData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Target" dataKey="Target" stroke="#4ade80" fill="#4ade80" fillOpacity={0.6} />
                  <Radar name="Achieved" dataKey="Achieved" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;