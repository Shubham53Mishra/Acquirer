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

export default function ReviewSubmit() {
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
                <span className="text-sm text-gray-400">Review & Submit</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Review & <span className="font-extrabold">Submit</span>
              </h1>
              <div className="text-gray-500 text-base max-w-2xl mb-2">
                Please review all your information before submitting your profile for final verification.
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[200px] ml-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-500 text-sm mr-2">Progress</span>
                <span className="text-blue-600 font-bold text-base">100%</span>
              </div>
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "100%" }}
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
              <div
                className="flex flex-col items-center flex-1 min-w-[80px] cursor-pointer"
                onClick={() => navigate("/investmentexperience")}
              >
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
                <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-blue-700">
                  Review & Submit
                </span>
                <span className="text-[10px] text-gray-400">
                  Final verification
                </span>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Investment Motivation & Objectives */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-red-100 rounded-full p-3 mr-3">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Investment Motivation & Objectives
                </h3>
                <div className="text-xs text-gray-400 font-medium mt-1">
                  Define your investment goals and motivations to align with suitable opportunities.
                </div>
              </div>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Investment Motivation</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select investment motivation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Investment Timeline</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select investment timeline</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Exit Strategy</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select exit strategy</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Investment Objectives</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select investment objectives</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1 text-gray-700">Professional References</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select professional references</option>
                </select>
              </div>
            </form>
          </div>
          {/* Legal & Compliance Information */}
          <div className="bg-white rounded-2xl shadow p-8">
            <div className="flex items-center mb-2">
              <div className="bg-orange-100 rounded-full p-3 mr-3">
                <Briefcase className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Legal & Compliance Information
                </h3>
                <div className="text-xs text-gray-400 font-medium mt-1">
                  Ensure regulatory compliance and legal requirements are met for investment activities.
                </div>
              </div>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Legal Representation</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select legal representation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Regulatory Compliance</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select compliance status</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Conflict of Interest Declaration</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select conflict status</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Political Exposure</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select political exposure</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1 text-gray-700">Sanctions Check</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  <option>Select sanctions status</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="max-w-6xl mx-auto flex justify-between mt-10">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-2 rounded-lg shadow hover:bg-gray-50">
            &larr; Previous
          </button>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-700">
            Submit Profile
          </button>
        </div>
      </div>
    </>
  );
}
