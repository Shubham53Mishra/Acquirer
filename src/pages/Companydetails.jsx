// CompanyDetails.jsx
import React from 'react';
import {
  Building2,
  Briefcase,
  Globe,
  Users,
  DollarSign,
  MapPin,
  FileText,
  CheckCircle2, // <-- Add this import
} from "lucide-react";

export default function CompanyDetails() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-10 lg:px-24">
      {/* Progress & Title */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded mr-2">
              PROFILE STEP
            </span>
            <span className="text-sm text-gray-400 ml-2">Company Details</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-2">
              Tell Us About Your <span className="font-extrabold">Company</span>
            </h2>
            <div className="text-gray-500 text-base max-w-2xl">
              Provide detailed information about your business to help us understand your company profile and investment needs.
            </div>
          </div>
          <div className="flex flex-col items-end mt-4 md:mt-0">
            <div className="flex items-center mb-1">
              <span className="text-gray-500 text-sm mr-2">Progress</span>
              <span className="text-blue-600 font-bold text-base">40%</span>
            </div>
            <div className="w-40 bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "40%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Progress */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-1 justify-between max-w-4xl mx-auto">
          <div className="flex flex-col items-center flex-1 min-w-[80px]">
            <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
              <Users className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold text-blue-700">
              Personal Information
            </span>
            <span className="text-[10px] text-gray-400">
              Basic details & verify
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 min-w-[80px]">
            <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
              <Building2 className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold text-blue-700">
              Company Details
            </span>
            <span className="text-[10px] text-gray-400">
              Business info
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 min-w-[80px]">
            <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
              <DollarSign className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold text-gray-500">
              Financial Profile
            </span>
            <span className="text-[10px] text-gray-400">
              Investment capacity
            </span>
          </div>
          <div className="flex flex-col items-center flex-1 min-w-[80px]">
            <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
              <Briefcase className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold text-gray-500">
              Investment Experience
            </span>
            <span className="text-[10px] text-gray-400">
              Investment history
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
              Final review
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company Info */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 rounded-full p-3 mr-3">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Company Information</h3>
              <div className="text-xs text-gray-400 font-medium mt-1">
                Essential details about your company structure and operations.
              </div>
            </div>
          </div>
          <form className="space-y-4 mt-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Company Name*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="Enter company name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Your Position*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="e.g., CEO, Founder, CFO" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Industry*</label>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                <option>Technology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Business Type*</label>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                <option>Corporation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Incorporation Date*</label>
              <input type="date" className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Years in Business*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="e.g., 5" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Company Size*</label>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                <option>1-10 employees</option>
              </select>
            </div>
          </form>
        </div>

        {/* Business Details */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 rounded-full p-3 mr-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Business Details</h3>
              <div className="text-xs text-gray-400 font-medium mt-1">
                Financial information and business operations details.
              </div>
            </div>
          </div>
          <form className="space-y-4 mt-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Annual Revenue*</label>
              <select className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                <option>$0 - $100K</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Company Website*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="https://www.yourcompany.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Headquarters Location*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="City, State, Country" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Tax ID/EIN*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="XX-XXXXXXX" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">License Number*</label>
              <input className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" placeholder="Business license number" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Business Description*</label>
              <textarea className="w-full p-2 border border-gray-200 rounded-lg bg-gray-50" rows="4" placeholder="Business Description"></textarea>
            </div>
          </form>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <button className="bg-white border border-gray-200 text-gray-700 px-8 py-2 rounded-lg shadow">← Previous</button>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow">Next →</button>
      </div>
    </div>
  );
}
