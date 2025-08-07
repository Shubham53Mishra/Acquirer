import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  User,
  Building2,
  DollarSign,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function InvestmentExperience() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fafd] px-4 py-8 md:px-10 lg:px-24">
        {/* Progress & Title */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded mr-2">
                  PROFILE SETUP
                </span>
                <span className="text-sm text-gray-400">Investment Experience</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your <span className="font-extrabold">Investment Experience</span>
              </h1>
              <div className="text-gray-500 text-base max-w-2xl mb-2">
                Tell us about your investment background and track record to better understand your expertise.
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[200px] ml-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-500 text-sm mr-2">Progress</span>
                <span className="text-blue-600 font-bold text-base">80%</span>
              </div>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Progress */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-1 justify-between max-w-4xl mx-auto w-full">
              <div
                className="flex flex-col items-center flex-1 min-w-[80px] cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                  <User className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-blue-700">
                  Personal Information
                </span>
                <span className="text-[10px] text-gray-400">
                  Basic details & identity
                </span>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
              <div
                className="flex flex-col items-center flex-1 min-w-[80px] cursor-pointer"
                onClick={() => navigate("/companydetails")}
              >
                <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                  <Building2 className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-blue-700">
                  Company Details
                </span>
                <span className="text-[10px] text-gray-400">
                  Business information
                </span>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
              <div
                className="flex flex-col items-center flex-1 min-w-[80px] cursor-pointer"
                onClick={() => navigate("/financialprofile")}
              >
                <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                  <DollarSign className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-blue-700">
                  Financial Profile
                </span>
                <span className="text-[10px] text-gray-400">
                  Investment capacity
                </span>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[80px]">
                <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                  <Briefcase className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-blue-700">
                  Investment Experience
                </span>
                <span className="text-[10px] text-gray-400">
                  Background & preferences
                </span>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[80px]">
                <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  Review & Submit
                </span>
                <span className="text-[10px] text-gray-400">
                  Final verification
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Investment Background */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 rounded-full p-2 mr-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Investment Background
              </h3>
            </div>
            <div className="text-xs text-gray-400 mb-4">
              Tell us about your investment experience and track record to better understand your expertise.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Experience Level*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select experience level</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Previous Investments
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select number of investments</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Total Amount Invested
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select total amount invested</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Successful Exits
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select number of exits</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Average Return
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select average return</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Geographic Preference
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select geographic preference</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Minimum Investment
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select Minimum Investment</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Maximum Investment
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select Maximum Investment</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Portfolio Companies
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select Portfolio Companies</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Board Seats
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select Board Seats</option>
                </select>
              </div>
            </div>
          </div>
          {/* Investment Process & Preferences */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 rounded-full p-2 mr-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Investment Process & Preferences
              </h3>
            </div>
            <div className="text-xs text-gray-400 mb-4">
              Define your investment process and sector preferences to streamline deal flow.
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold mb-1 text-gray-500">
                Preferred Sectors
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Technology
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Fintech
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Real Estate
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Healthcare
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> AI/ML
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Energy
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Due Diligence Process
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select due diligence process</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Investment Committee
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select committee structure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Legal Counsel
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select legal counsel type</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Accounting Firm
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select accounting firm type</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="max-w-6xl mx-auto flex justify-between mt-10">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-2 rounded-lg shadow hover:bg-gray-50">
            &larr; Previous
          </button>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-700">
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
