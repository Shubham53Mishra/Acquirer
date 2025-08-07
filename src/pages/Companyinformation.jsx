import React from "react";
import Navbar from "../components/layout/Navbar";

export default function CompanyInformation() {
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
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            <button className="bg-[#3b28ff] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Company Information
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
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
            {/* Company Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Company Information</h4>
              <div className="grid grid-cols-1 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Company Name</span>
                  <div className="font-semibold text-gray-700">TechNova Inc.</div>
                </div>
                <div>
                  <span className="text-gray-500">Company Email</span>
                  <div className="font-semibold text-gray-700">info@technova.com</div>
                </div>
                <div>
                  <span className="text-gray-500">Company Website</span>
                  <div>
                    <a
                      href="https://technova.com"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://technova.com
                    </a>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">CEO/Founder</span>
                  <div className="font-semibold text-gray-700">Alex Johnson</div>
                </div>
                <div>
                  <span className="text-gray-500">Industry</span>
                  <div className="font-semibold text-gray-700">Technology</div>
                </div>
                <div>
                  <span className="text-gray-500">Location</span>
                  <div className="font-semibold text-gray-700">San Francisco, CA, USA</div>
                </div>
              </div>
            </div>
            {/* Business Details */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Business Details</h4>
              <div className="grid grid-cols-1 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Tax ID/EIN</span>
                  <div className="font-semibold text-gray-700">12-3456789</div>
                </div>
                <div>
                  <span className="text-gray-500">License Number</span>
                  <div className="font-semibold text-gray-700">B-2020-001</div>
                </div>
                <div>
                  <span className="text-gray-500">Incorporation Date</span>
                  <div className="font-semibold text-gray-700">2018-11-19</div>
                </div>
                <div>
                  <span className="text-gray-500">Business Type</span>
                  <div className="font-semibold text-gray-700">Corporation</div>
                </div>
                <div>
                  <span className="text-gray-500">Company Size</span>
                  <div className="font-semibold text-gray-700">51-200</div>
                </div>
                <div>
                  <span className="text-gray-500">Description</span>
                  <div className="font-semibold text-gray-700">
                    Leading technology investment firm specializing in early-stage startups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
        </div>
      </div>
    </>
  );
}
