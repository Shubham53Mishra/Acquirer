import React from "react";
import Navbar from "../components/layout/Navbar";

export default function SubmitOffer() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-bold mb-1 text-gray-600 ">Submit Your Offer</h1>
        <p className="text-gray-500 mb-4">
          Make an investment offer for EcoTech Solutions
        </p>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Sidebar */}
          <div className="bg-white rounded-lg shadow p-3">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 text-white text-xl font-bold rounded-md mb-3">
              ET
            </div>
            <h2 className="font-semibold text-base text-gray-600">EcoTech Solutions</h2>
            <p className="text-sm text-gray-500 mt-1">
              Sustainable technology platform for carbon emissions tracking and
              reduction insights.
            </p>

            <div className="mt-6">
              <p className="text-sm text-gray-500">Current Valuation</p>
              <p className="font-semibold text-gray-400">₹2.5Cr</p>
              <p className="text-sm text-gray-500 mt-2">Industry</p>
              <p className="font-semibold text-gray-400">CleanTech</p>
              <p className="text-sm text-gray-500 mt-2">Founded</p>
              <p className="font-semibold text-gray-400">2020</p>
              <p className="text-sm text-gray-500 mt-2">Employees</p>
              <p className="font-semibold text-gray-400">25</p>
              <p className="text-sm text-gray-500 mt-2">Location</p>
              <p className="font-semibold text-gray-400">Bengaluru, India</p>
            </div>

            <div className="mt-4 border-t pt-2">
              <h3 className="text-xs font-semibold mb-1">Key Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  Monthly Revenue: <span className="text-green-500">₹75k</span>
                </li>
                <li>
                  Growth Rate: <span className="text-green-500">+45% MoM</span>
                </li>
                <li>Active Users: 12,000+</li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-3">
            <h2 className="text-base font-semibold mb-2 text-gray-600">Investment Details</h2>
            <p className="text-xs text-gray-500 mb-3">
              Provide your investment terms and conditions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Investment Amount
                </label>
                <input
                  type="text"
                  placeholder="Enter amount (e.g. INR, $USD)"
                  className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Currency
                </label>
                <select className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Indian Rupee (INR)</option>
                  <option>US Dollar (USD)</option>
                  <option>Euro (EUR)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Equity Percentage
                </label>
                <input
                  type="number"
                  placeholder="0.0"
                  className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Business Type
                </label>
                <select className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400">
                  <option>Whole Business Acquisition</option>
                  <option>Partial Acquisition</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium mb-1 text-gray-400">
                Investment Type
              </label>
              <select className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400">
                <option>Equity Funding</option>
                <option>Debt Funding</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-medium mb-1 text-gray-400">
                Additional Terms &amp; Message
              </label>
              <textarea
                className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="2"
              ></textarea>
            </div>

            <div className="mb-4 border rounded-lg p-2 bg-gray-50">
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full"></span>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 text-gray-400">
                    Non-Disclosure Agreement Required
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    Before submitting your offer, you will be required to sign
                    the Non-Disclosure Agreement to protect confidential
                    business information.
                  </p>
                  <button className="px-3 py-1.5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-xs">
                    Review &amp; Sign NDA
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-1.5 border rounded-lg hover:bg-gray-100 text-xs text-gray-400">
                Cancel Offer
              </button>
              <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-xs">
                Submit Investment Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
