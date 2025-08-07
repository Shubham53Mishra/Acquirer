import React from "react";
import Navbar from "../components/layout/Navbar";

export default function InvestmentBackground() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fafd] px-4 py-8 md:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Investor Profile
              </h2>
              <div className="text-gray-500 text-base">
                Complete investor profile information and verification status
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs flex items-center gap-1">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="w-4 h-4"><path d="M20 6 9 17l-5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Verified
              </span>
              <button className="bg-[#3b28ff] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                Edit Profile
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Personal Information
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Company Information
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Financial Information
            </button>
            <button className="bg-[#3b28ff] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Investment Background
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Legal & Compliance
            </button>
          </div>
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Investment Experience */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Investment Experience</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Experience Level</span>
                  <div className="font-semibold text-gray-500">Advanced</div>
                </div>
                <div>
                  <span className="text-gray-600">Previous Investments</span>
                  <div className="font-semibold text-gray-500">15+</div>
                </div>
                <div>
                  <span className="text-gray-600">Total Amount Invested</span>
                  <div className="font-semibold text-gray-500">$10M+</div>
                </div>
                <div>
                  <span className="text-gray-600">Successful Exits</span>
                  <div className="font-semibold text-gray-500">5</div>
                </div>
                <div>
                  <span className="text-gray-600">Average Return</span>
                  <div className="font-semibold text-gray-500">18%</div>
                </div>
                <div>
                  <span className="text-gray-600">Geographic Preference</span>
                  <div className="font-semibold text-gray-500">Global</div>
                </div>
              </div>
            </div>
            {/* Preferences */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Preferences</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Preferred Sectors</span>
                  <div className="font-semibold text-gray-500">Technology, Healthcare</div>
                </div>
                <div>
                  <span className="text-gray-600">Minimum Investment</span>
                  <div className="font-semibold text-gray-500">$100K</div>
                </div>
                <div>
                  <span className="text-gray-600">Maximum Investment</span>
                  <div className="font-semibold text-gray-500">$2M</div>
                </div>
                <div>
                  <span className="text-gray-600">Portfolio Companies</span>
                  <div className="font-semibold text-gray-500">8</div>
                </div>
                <div>
                  <span className="text-gray-600">Board Seats</span>
                  <div className="font-semibold text-gray-500">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
