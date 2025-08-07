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

export default function FinancialProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fafd] px-4 py-8 md:px-10 lg:px-24">
        {/* Progress & Title */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            {/* Left: Title and Description */}
            <div>
              <div className="flex items-center mb-2">
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded mr-2">
                  PROFILE SETUP
                </span>
                <span className="text-sm text-gray-400">Financial Profile</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your <span className="font-extrabold">Financial Profile</span>
              </h1>
              <div className="text-gray-500 text-base max-w-2xl mb-2">
                Help us understand your financial situation and investment capacity
                to provide suitable investment opportunities that match your
                profile.
              </div>
            </div>
            {/* Right: Progress Bar */}
            <div className="flex flex-col items-end min-w-[200px] ml-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-500 text-sm mr-2">Progress</span>
                <span className="text-blue-600 font-bold text-base">60%</span>
              </div>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "60%" }}
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
                <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
                  <Briefcase className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  Investment Experience
                </span>
                <span className="text-[10px] text-gray-400">
                  Background & preferences
                </span>
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
          {/* Personal Financial Information */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-green-100 rounded-full p-2 mr-2">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Personal Financial Information
              </h3>
            </div>
            <div className="text-xs text-gray-400 mb-4">
              Please provide your financial details to help us assess your
              investment capacity.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Net Worth*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select net worth range</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Liquid Assets*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select liquid assets range</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Annual Income*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select annual income range</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Credit Score*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select credit score range</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Primary Bank
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select primary bank</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Debt Obligations
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select debt obligations</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Tax Bracket
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select Tax bracket</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Financial Advisor
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select financial advisor</option>
                </select>
              </div>
            </div>
          </div>
          {/* Investment Capacity & Preferences */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-green-100 rounded-full p-2 mr-2">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Investment Capacity & Preferences
              </h3>
            </div>
            <div className="text-xs text-gray-400 mb-4">
              Define your investment goals and risk preferences to match suitable
              opportunities.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Investment Budget*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select investment budget</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Risk Tolerance*
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select risk tolerance</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Source of Funds
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select source of funds</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Expected Returns
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select expected returns</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Investment Horizon
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select investment horizon</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Portfolio Allocation
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select portfolio allocation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Insurance Coverage
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select insurance coverage</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-500">
                  Estate Planning
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-500">
                  <option>Select estate planning</option>
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

