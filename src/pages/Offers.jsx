/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtherNavbar from '../components/layout/OtherNavbar';

const offers = [
  {
    id: 1,
    title: "Autonomous Drone Technology",
    description: "Strategic funding with technology partnership opportunities",
    amount: "₹5L for 5% equity",
    status: "Pending",
    statusColor: "bg-green-500",
    timeAgo: "2 days ago",
    actionButton: "Founder Interested",
    actionColor: "bg-green-500"
  },
  {
    id: 2,
    title: "AI-Powered Personal Assistant",
    description: "Partnership for market expansion and AI expertise",
    amount: "₹15L for 10% equity",
    status: "Partnership",
    statusColor: "bg-blue-500",
    timeAgo: "1 week ago",
    actionButton: "Shared with Founder",
    actionColor: "bg-blue-500"
  },
  {
    id: 3,
    title: "Blockchain Payment System",
    description: "Funding with fintech industry connections",
    amount: "₹8L for 6% equity",
    status: "Pending",
    statusColor: "bg-green-500",
    timeAgo: "3 days ago",
    actionButton: "Under Review",
    actionColor: "bg-orange-500"
  },
  {
    id: 4,
    title: "Medical Diagnostic Device",
    description: "Full acquisition with team retention",
    amount: "₹25L for 15% equity",
    status: "Acquisition",
    statusColor: "bg-red-500",
    timeAgo: "1 week ago",
    actionButton: "Not Shared",
    actionColor: "bg-gray-500"
  },
  {
    id: 5,
    title: "Sustainable Energy Solution",
    description: "Mentorship and strategic guidance in clean energy sector",
    amount: "₹12L for 8% equity",
    status: "Mentorship",
    statusColor: "bg-purple-500",
    timeAgo: "1 day ago",
    actionButton: "Sent to Admin",
    actionColor: "bg-blue-500"
  },
  {
    id: 6,
    title: "EdTech Learning Platform",
    description: "Investment with educational sector expertise",
    amount: "₹10L for 12% equity",
    status: "Investment",
    statusColor: "bg-indigo-500",
    timeAgo: "5 days ago",
    actionButton: "In Review",
    actionColor: "bg-yellow-500"
  },
  {
    id: 7,
    title: "Agricultural Monitoring System",
    description: "Strategic partnership for AgriTech market penetration",
    amount: "₹18L for 7% equity",
    status: "Partnership",
    statusColor: "bg-blue-500",
    timeAgo: "2 weeks ago",
    actionButton: "Founder Response",
    actionColor: "bg-green-500"
  },
  {
    id: 8,
    title: "Urban Mobility Solution",
    description: "Large scale investment for city-wide deployment",
    amount: "₹50L for 20% equity",
    status: "Investment",
    statusColor: "bg-indigo-500",
    timeAgo: "3 days ago",
    actionButton: "Under Evaluation",
    actionColor: "bg-orange-500"
  }
];

const statusFilters = ["All", "Pending", "Partnership", "Investment", "Acquisition", "Mentorship"];

export default function MyOffers() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showHeadstartModal, setShowHeadstartModal] = useState(false);
  const [showOpportunityModal, setShowOpportunityModal] = useState(false);
  const [showNdaModal, setShowNdaModal] = useState(false); // NDA modal for next popup
  const navigate = useNavigate();

  // Helper function to convert time ago to sortable number
  const getTimeValue = (timeAgo) => {
    if (timeAgo.includes('day')) {
      return parseInt(timeAgo);
    } else if (timeAgo.includes('week')) {
      return parseInt(timeAgo) * 7;
    } else if (timeAgo.includes('hour')) {
      return parseInt(timeAgo) / 24;
    }
    return 0;
  };

  const filteredOffers = offers.filter(offer => 
    selectedStatus === "All" || offer.status === selectedStatus
  );

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sortBy === "newest") {
      return getTimeValue(a.timeAgo) - getTimeValue(b.timeAgo);
    } else if (sortBy === "oldest") {
      return getTimeValue(b.timeAgo) - getTimeValue(a.timeAgo);
    } else if (sortBy === "amount") {
      const aAmount = parseFloat(a.amount.replace(/[₹L\s]/g, ''));
      const bAmount = parseFloat(b.amount.replace(/[₹L\s]/g, ''));
      return bAmount - aAmount;
    } else if (sortBy === "equity") {
      const aEquity = parseFloat(a.amount.split('for ')[1]);
      const bEquity = parseFloat(b.amount.split('for ')[1]);
      return bEquity - aEquity;
    }
    return 0;
  });

  return (
    <>
      <OtherNavbar />
      
      <div className="bg-gray-50 min-h-screen px-4 md:px-10 lg:px-20 py-8 pt-28">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Browse Projects</h1>
            <p className="text-gray-600 mt-1">
              Discover innovative startups and investment opportunities
            </p>
          </div>
          <button
            className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setShowHeadstartModal(true)}
          >
            Headstart Contact
          </button>
        </div>

        {/* Main Navigation Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => navigate('/browseprojects')}
          >
            Browse Projects
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            My Offers
          </button>
        </div>

        {/* My Offers Section */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">My Offers</h2>
              <p className="text-gray-600 mt-1">Track your submitted offers and their status</p>
            </div>
            
            <div className="flex gap-3 mt-4 md:mt-0">
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Filter
                </button>
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800 mb-2">Filter by Status</h4>
                      {statusFilters.map((status) => (
                        <button
                          key={status}
                          onClick={() => {
                            setSelectedStatus(status);
                            setShowFilters(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 ${
                            selectedStatus === status ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowSort(!showSort)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Sort
                </button>
                {showSort && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800 mb-2">Sort by</h4>
                      {['newest', 'oldest', 'amount', 'equity'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setShowSort(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 ${
                            sortBy === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          }`}
                        >
                          {option === 'newest' ? 'Newest First' :
                           option === 'oldest' ? 'Oldest First' :
                           option === 'amount' ? 'Highest Amount' :
                           'Highest Equity'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 text-sm">
              Showing {sortedOffers.length} of {offers.length} offers
              {selectedStatus !== "All" && ` (${selectedStatus})`}
            </p>
            <p className="text-gray-500 text-xs">
              Sorted by: {sortBy === 'newest' ? 'Newest First' :
                        sortBy === 'oldest' ? 'Oldest First' :
                        sortBy === 'amount' ? 'Highest Amount' :
                        'Highest Equity'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Offers List */}
          <div className="space-y-4">
            {sortedOffers.map((offer) => (
              <div key={offer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${offer.statusColor}`}></div>
                      <h3 className="text-lg font-semibold text-gray-800">{offer.title}</h3>
                      <span className="text-sm text-gray-500">{offer.timeAgo}</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                    
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-gray-800">{offer.amount}</span>
                      <span className={`px-2 py-1 text-xs rounded-full text-white ${offer.statusColor}`}>
                        {offer.status}
                      </span>
                    </div>
                  </div>
                  
                  <button className={`px-4 py-2 text-white text-sm rounded-lg transition-colors ${offer.actionColor} hover:opacity-90`}>
                    {offer.actionButton}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              Load More Offers
            </button>
          </div>
        </div>

        {/* Headstart Contact Modal */}
        {showHeadstartModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowHeadstartModal(false)}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-3xl text-indigo-500">📄</span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-700 text-center">Connect with Headstart</h2>
                <p className="text-gray-500 text-center mb-4">
                  Provide business details to get qualified and unlock investment opportunities.
                </p>
                <div className="bg-yellow-50 border border-yellow-300 rounded p-3 mb-4 text-xs text-gray-700">
                  <b>Important Notification</b><br />
                  Please ensure your business details are accurate and up-to-date. All submitted information will be reviewed by our team for eligibility.
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4 text-xs text-gray-700">
                  <b>Special Note:</b><br />
                  Only verified businesses will be able to access premium investment opportunities and connect with top investors.
                </div>
                <div className="mt-2 mb-4 text-center text-gray-600 text-sm">
                  Ready to grow & unlock investment opportunities?
                </div>
                <button
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold"
                  onClick={() => {
                    setShowHeadstartModal(false);
                    setShowOpportunityModal(true);
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Investment Opportunity Access Modal */}
        {showOpportunityModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowOpportunityModal(false)}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-3xl text-indigo-500">📅</span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Investment Opportunity Access</h2>
                <p className="text-gray-500 text-center mb-4">
                  Headstart curates high-quality investment opportunities for an exclusive network of entrepreneurs and investors. Our filtering process ensures you see only the most promising deals that match your investment criteria.
                </p>
                <div className="mb-4 w-full flex flex-col items-center">
                  <span className="font-medium text-gray-700 mb-2">Are you interested in Headstart filtered projects?</span>
                  <div className="flex gap-6 justify-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        defaultChecked
                        className="accent-indigo-600"
                        onClick={() => {
                          setShowOpportunityModal(false);
                          setShowNdaModal(true);
                        }}
                      />
                      <span className="text-gray-700 font-medium">Yes, I'm interested</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="interest" className="accent-indigo-600" />
                      <span className="text-gray-700 font-medium">No, not at this time</span>
                    </label>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-4 mt-4 text-xs text-green-700 w-full text-center">
                  <b>Thank you for your interest!</b><br />
                  We understand that timing is important in investment decisions.<br />
                  Feel free to reach out to us anytime when you're ready to explore investment opportunities.<br />
                  Our team is always here to help. You can also email us at <span className="font-semibold">investment@headstart.com</span> or click the link in your dashboard.<br />
                  <span className="text-green-600">Best of luck on your investment journey!</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NDA Modal (matches your image) */}
        {showNdaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setShowNdaModal(false)}
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-3xl text-indigo-500">📄</span>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-700 text-center">Investment Opportunity Access</h2>
                <p className="text-gray-500 text-center mb-4">
                  Headstart curates high-quality investment opportunities from our extensive network of entrepreneurs and startups. Our filtering process ensures you see only the most promising deals that match your investment criteria.
                </p>
                <div className="mb-4 w-full flex flex-col items-center">
                  <span className="font-medium text-gray-700 mb-2">Are you interested in Headstart filtered projects?</span>
                  <div className="flex gap-6 justify-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="nda_interest" defaultChecked className="accent-indigo-600" />
                      <span className="text-gray-700 font-medium">Yes, I'm interested</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="nda_interest" className="accent-indigo-600" />
                      <span className="text-gray-700 font-medium">No, not at this time</span>
                    </label>
                  </div>
                </div>
                <button
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold mt-4"
                  onClick={() => {
                    setShowNdaModal(false);
                    navigate('/submitoffer');
                  }}
                >
                  Continue to NDA
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}