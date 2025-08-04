/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';

const projects = [
  {
    title: "Autonomous Drone Technology",
    status: "✅ Approved – Live on Exchange",
    category: "Robotics",
    funding: "₹12.5 Cr",
    tags: ["Market Ready", "Patent Pending"],
    views: 182,
    bids: 7,
    description: "Advanced autonomous navigation system for commercial drones with AI-powered obstacle detection and route optimization."
  },
  {
    title: "Blockchain Payment System",
    status: "✅ Approved – Live on Exchange",
    category: "Fintech",
    funding: "₹11.5 Cr",
    tags: ["MVP Ready", "Patent Filed"],
    views: 156,
    bids: 5,
    description: "Secure cryptocurrency payment processing platform for e-commerce with multi-currency support and smart contracts."
  },
  {
    title: "AI-Powered Personal Assistant",
    status: "✅ Approved – Live on Exchange",
    category: "AI/ML",
    funding: "₹8.2 Cr",
    tags: ["Beta Testing", "Cloud Ready"],
    views: 293,
    bids: 9,
    description: "Intelligent personal assistant with natural language processing and machine learning capabilities for productivity enhancement."
  },
  {
    title: "Sustainable Energy Solution",
    status: "✅ Approved – Live on Exchange",
    category: "GreenTech",
    funding: "₹15.8 Cr",
    tags: ["Pilot Project", "Government Support"],
    views: 134,
    bids: 6,
    description: "Solar-powered micro-grid technology for rural electrification with battery storage and smart energy management systems."
  },
  {
    title: "Revolutionary Smart Home Device",
    status: "✅ Approved – Live on Exchange",
    category: "IoT",
    funding: "₹6.3 Cr",
    tags: ["Prototype Ready", "Patent Pending"],
    views: 98,
    bids: 4,
    description: "Next-generation smart home automation system with AI integration and voice control capabilities."
  },
  {
    title: "Medical Diagnostic Device",
    status: "✅ Approved – Live on Exchange",
    category: "HealthTech",
    funding: "₹18.2 Cr",
    tags: ["Clinical Trials", "FDA Approved"],
    views: 267,
    bids: 12,
    description: "Portable medical diagnostic equipment with real-time analysis and cloud-based reporting system."
  },
  {
    title: "EdTech Learning Platform",
    status: "🔄 Under Review",
    category: "Education",
    funding: "₹7.5 Cr",
    tags: ["MVP Ready", "User Testing"],
    views: 145,
    bids: 8,
    description: "Interactive online learning platform with gamification and personalized curriculum for K-12 education."
  },
  {
    title: "Agricultural Monitoring System",
    status: "✅ Approved – Live on Exchange",
    category: "AgriTech",
    funding: "₹9.8 Cr",
    tags: ["Field Tested", "Government Partnership"],
    views: 89,
    bids: 3,
    description: "IoT-based crop monitoring system with satellite imagery analysis and predictive farming insights."
  },
  {
    title: "Urban Mobility Solution",
    status: "🔄 Under Review",
    category: "Transportation",
    funding: "₹22.1 Cr",
    tags: ["Pilot Program", "City Partnership"],
    views: 312,
    bids: 15,
    description: "Electric vehicle sharing platform with smart routing and sustainable transportation solutions for urban areas."
  }
];

const categories = ["All", "Robotics", "Fintech", "AI/ML", "GreenTech", "IoT", "HealthTech", "Education", "AgriTech", "Transportation"];

export default function BrowseProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("funding");

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "funding") {
      const aAmount = parseFloat(a.funding.replace(/[₹\s]/g, '').replace('Cr', ''));
      const bAmount = parseFloat(b.funding.replace(/[₹\s]/g, '').replace('Cr', ''));
      return bAmount - aAmount;
    } else if (sortBy === "views") {
      return b.views - a.views;
    } else if (sortBy === "bids") {
      return b.bids - a.bids;
    }
    return 0;
  });

  return (
    <>
      <OtherNavbar />
      
      {/* Main content wrapper with padding to avoid overlapping the navbar */}
      <div className="bg-gray-50 min-h-screen px-4 md:px-10 lg:px-20 py-8 pt-28">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Browse Projects</h1>
            <p className="text-gray-600 mt-1">
              Discover innovative startups and investment opportunities
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Headstart Contact
          </button>
        </div>

        {/* Main Navigation Buttons - positioned right under the description */}
        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Browse Projects
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors">
            My Offers
          </button>
        </div>

        {/* Category Filters and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="funding" className="bg-white text-gray-800">Sort by Funding</option>
            <option value="views" className="bg-white text-gray-800">Sort by Views</option>
            <option value="bids" className="bg-white text-gray-800">Sort by Bids</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-gray-600 text-sm mb-4">
          Showing {sortedProjects.length} projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm text-blue-600 font-semibold">{project.category}</span>
                <span className="text-sm text-green-600 font-bold">{project.funding}</span>
              </div>

              <h2 className="text-lg font-bold text-gray-800 mb-1">{project.title}</h2>
              <div className={`text-sm font-medium mb-3 ${
                project.status.includes('Approved') ? 'text-green-700' : 'text-orange-600'
              }`}>
                {project.status}
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>👁 {project.views} Views</span>
                <span>📊 {project.bids} Bids</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  View Pitch
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 text-sm rounded-lg hover:bg-green-700 transition-colors">
                  Watch Video
                </button>
              </div>

              <button className="w-full mt-3 bg-gray-100 text-sm text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Make an Offer
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {sortedProjects.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </>
  );
}