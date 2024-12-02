import React from "react";
import { Leaf, TreePine, Server, Database, Palette, Shield, LineChart, Layout } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              UNC Charlotte Sustainability Dashboard
            </h1>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 border border-green-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <TreePine className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Sustainability Summary</h2>
          </div>
          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 leading-relaxed">
              UNC Charlotte has achieved remarkable recognition in sustainability, being featured in the Princeton Review's 2025 Guide to Green Colleges. As one of 511 institutions selected, the university demonstrated outstanding commitment to environmental responsibility and sustainability practices. The university received an impressive green rating score of 90 out of 99, reflecting its comprehensive approach to environmental awareness and preparation. The recognition comes at a significant time as UNC Charlotte celebrates Campus Sustainability Month in October, featuring various environmental initiatives and community engagement events.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These initiatives include the Transportation Fair, which promotes sustainable commuting options, the Student Sustainability Summit that encourages leadership in environmental stewardship, Campus Beautification Day focusing on maintaining our green spaces, and a weekly farmer's market supporting local agriculture. All these events are designed to promote environmental consciousness within the Niner Nation community. This achievement is particularly noteworthy as recent studies indicate that 61% of college applicants consider a university's environmental commitment when choosing their school, highlighting the growing importance of sustainability in higher education.
            </p>
            <div className="mt-6 text-sm text-gray-600">
              Source:{" "}
              <a href="https://inside.charlotte.edu/2024/10/25/unc-charlotte-featured-in-princeton-review-2025-guide-to-green-colleges/" 
                 className="text-green-600 hover:text-green-700 hover:underline transition-colors">
                UNC Charlotte News
              </a>
            </div>
          </div>
        </div>

        {/* Technical Implementation Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <Server className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Technical Implementation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechCard icon={<Layout />} title="Frontend" description="React.js with React Router for SPA routing" />
            <TechCard icon={<Server />} title="Backend" description="Node.js with Express.js running on port 8080" />
            <TechCard icon={<Database />} title="Database" description="MongoDB for data storage" />
            <TechCard icon={<Shield />} title="Security" description="JWT (JSON Web Tokens)" />
            <TechCard icon={<LineChart />} title="Charts" description="Recharts library for data visualization" />
            <TechCard icon={<Palette />} title="Styling" description="Tailwind CSS for responsive design" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TechCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="flex items-center space-x-3 mb-3">
      <div className="text-green-600">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Dashboard;