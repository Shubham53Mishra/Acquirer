import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  User,
  Building2,
  DollarSign,
  Briefcase,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Users,
  UserCheck,
} from "lucide-react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-6 px-2 md:px-8">
        {/* Top Section: Left and Right */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Left Side */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded mr-2">
                PROFILE SETUP
              </span>
              <span className="text-sm text-gray-500">Personal Information</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Complete Your{" "}
              <span className="font-extrabold">Investor Profile</span>
            </h1>
            <div className="border-2 border-blue-300 rounded-lg p-3 text-gray-600 text-base max-w-xl">
              Help us understand your investment preferences and experience to
              provide personalized opportunities that match your investment goals
              and risk tolerance.
            </div>
          </div>
          {/* Right Side */}
          <div className="flex flex-col items-end w-full md:w-auto mt-6 md:mt-0 md:ml-8">
            <div className="flex items-center mb-1">
              <span className="text-gray-500 text-sm mr-2">Progress</span>
              <span className="text-blue-600 font-bold text-base">20%</span>
            </div>
            <div className="w-40 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>
        {/* Progress Bar & Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded mr-2">
                PROFILE SETUP
              </span>
              <span className="text-sm text-gray-500">Personal Information</span>
            </div>
            <div className="flex-1 ml-6">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="ml-3 text-blue-600 font-semibold text-sm">
                  20%
                </span>
              </div>
            </div>
          </div>
          {/* Steps */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex flex-col items-center flex-1 min-w-[80px]">
              <div className="bg-blue-600 text-white rounded-full p-2 mb-1">
                <User className="w-6 h-6" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold text-blue-700">
                Personal Information
              </span>
              <span className="text-[10px] text-gray-400">
                Basic details & identity
              </span>
            </div>
            <div className="flex-1 min-w-[80px] flex flex-col items-center">
              <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
                <Building2 className="w-6 h-6" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold text-gray-500">
                Company Details
              </span>
              <span className="text-[10px] text-gray-400">
                Business information
              </span>
            </div>
            <div className="flex-1 min-w-[80px] flex flex-col items-center">
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
            <div className="flex-1 min-w-[80px] flex flex-col items-center">
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
            <div className="flex-1 min-w-[80px] flex flex-col items-center">
              <div className="bg-gray-200 text-gray-400 rounded-full p-2 mb-1">
                <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
              </div>
              <span className="text-xs font-semibold text-gray-500">
                Review & Submit
              </span>
              <span className="text-[10px] text-gray-400">Final verification</span>
            </div>
          </div>
        </div>
        {/* Form Sections */}
        <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full p-2 mr-2">
                <User className="w-6 h-6" strokeWidth={2} />
              </div>
              <h2 className="text-lg font-bold">Personal Information</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Please provide your basic personal details to help us verify your
              identity and create your investor profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Middle Name
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter middle name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Nationality *
                </label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option>United States</option>
                  <option>India</option>
                  <option>Canada</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-full p-2 mr-2">
                <MapPin className="w-6 h-6" strokeWidth={2} />
              </div>
              <h2 className="text-lg font-bold">Contact Information</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Please provide your complete contact details including address,
              professional profiles, and emergency contact information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Full Address *
                </label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter your complete street address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <select className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option>Select state</option>
                  <option>California</option>
                  <option>Texas</option>
                  <option>New York</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code *</label>
                <input
                  className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="text"
                  placeholder="Enter ZIP code"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Professional Profiles
                </label>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    className="flex-1 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="url"
                    placeholder="LinkedIn Profile"
                  />
                  <input
                    className="flex-1 border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="url"
                    placeholder="Personal Website"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1 mt-2">
                  Emergency Contact Information
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="text"
                    placeholder="Contact Name"
                  />
                  <select className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <option>Select relationship</option>
                    <option>Parent</option>
                    <option>Sibling</option>
                    <option>Spouse</option>
                    <option>Friend</option>
                    <option>Other</option>
                  </select>
                  <input
                    className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="tel"
                    placeholder="Contact Phone"
                  />
                  <input
                    className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    type="email"
                    placeholder="Contact Email"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Navigation Buttons */}
        <div className="max-w-5xl mx-auto flex justify-between mt-8">
          <button
            type="button"
            className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-50"
          >
            &larr; Previous
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
