import React from "react";
import Navbar from "../components/layout/Navbar";

export default function FinancialInformation() {
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
            <button className="bg-[#3b28ff] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Financial Information
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Investment Background
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Legal & Compliance
            </button>
          </div>
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Investment Capacity */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Investment Capacity</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Net Worth</span>
                  <div className="font-semibold text-gray-500">$10M - $50M</div>
                </div>
                <div>
                  <span className="text-gray-500">Liquid Assets</span>
                  <div className="font-semibold text-gray-500">$5M - $10M</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Budget</span>
                  <div className="font-semibold text-gray-500">$1M - $5M</div>
                </div>
                <div>
                  <span className="text-gray-500">Risk Tolerance</span>
                  <div className="font-semibold text-gray-500">Moderate to High</div>
                </div>
                <div>
                  <span className="text-gray-500">Annual Income</span>
                  <div className="font-semibold text-gray-500">$1M - $5M</div>
                </div>
                <div>
                  <span className="text-gray-500">Credit Score</span>
                  <div className="font-semibold text-gray-500">750-850</div>
                </div>
              </div>
            </div>
            {/* Financial Details */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Financial Details</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Source of Funds</span>
                  <div className="font-semibold text-gray-500">Business Income</div>
                </div>
                <div>
                  <span className="text-gray-500">Expected Returns</span>
                  <div className="font-semibold text-gray-500">15-25%</div>
                </div>
                <div>
                  <span className="text-gray-500">Primary Bank</span>
                  <div className="font-semibold text-gray-500">Goldman Sachs</div>
                </div>
                <div>
                  <span className="text-gray-500">Debt Obligations</span>
                  <div className="font-semibold text-gray-500">Low</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Horizon</span>
                  <div className="font-semibold text-gray-500">5-10 years</div>
                </div>
                <div>
                  <span className="text-gray-500">Portfolio Allocation</span>
                  <div className="font-semibold text-gray-500">Diversified</div>
                </div>
                <div>
                  <span className="text-gray-500">Tax Bracket</span>
                  <div className="font-semibold text-gray-500">35%+</div>
                </div>
                <div>
                  <span className="text-gray-500">Financial Advisor</span>
                  <div className="font-semibold text-gray-500">Yes - Private Wealth</div>
                </div>
                <div>
                  <span className="text-gray-500">Insurance Coverage</span>
                  <div className="font-semibold text-gray-500">Comprehensive</div>
                </div>
                <div>
                  <span className="text-gray-500">Estate Planning</span>
                  <div className="font-semibold text-gray-500">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
