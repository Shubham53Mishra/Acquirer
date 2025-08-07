import React from "react";
import Navbar from "../components/layout/Navbar";
import { CheckCircle2 } from "lucide-react";

export default function InvestorProfile() {
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
                <CheckCircle2 className="w-4 h-4" /> Verified
              </span>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
                Edit Profile
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Personal Information
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
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
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">First Name</span>
                  <div className="text-gray-500 font-semibold">Amit</div>
                </div>
                <div>
                  <span className="text-gray-500">Last Name</span>
                  <div className="text-gray-500 font-semibold">Sharma</div>
                </div>
                <div>
                  <span className="text-gray-500">Middle Name</span>
                  <div className="text-gray-500 font-semibold">Kumar</div>
                </div>
                <div>
                  <span className="text-gray-500">Nationality</span>
                  <div className="text-gray-500 font-semibold">India</div>
                </div>
                <div>
                  <span className="text-gray-500">Date of Birth</span>
                  <div className="text-gray-500 font-semibold">1990-07-21</div>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Contact Information</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Full Address</span>
                  <div className="text-gray-500 font-semibold">45 MG Road, Apt 12C</div>
                </div>
                <div>
                  <span className="text-gray-500">City</span>
                  <div className="text-gray-500 font-semibold">Mumbai</div>
                </div>
                <div>
                  <span className="text-gray-500">State</span>
                  <div className="text-gray-500 font-semibold">Maharashtra</div>
                </div>
                <div>
                  <span className="text-gray-500">ZIP Code</span>
                  <div className="text-gray-500 font-semibold">400001</div>
                </div>
                <div>
                  <span className="text-gray-500">Email Address</span>
                  <div className="text-gray-500 font-semibold">amit.sharma@email.com</div>
                </div>
                <div>
                  <span className="text-gray-500">Phone Number</span>
                  <div className="text-gray-500 font-semibold">+91 98765 43500</div>
                </div>
              </div>
            </div>
            {/* Professional Profiles */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Professional Profiles</h4>
              <div className="text-sm">
                <div>
                  <span className="text-gray-500">LinkedIn Profile</span>
                  <div>
                    <a
                      href="https://linkedin.com/in/amitsharma"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://linkedin.com/in/amitsharma
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-gray-500">Personal Website</span>
                  <div>
                    <a
                      href="https://amitsharma.com"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://amitsharma.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Emergency Contact Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-4">Emergency Contact Information</h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Contact Name</span>
                  <div className=" text-gray-500 font-semibold">Priya Sharma</div>
                </div>
                <div>
                  <span className="text-gray-500">Relationship</span>
                  <div className=" text-gray-500 font-semibold">Wife</div>
                </div>
                <div>
                  <span className="text-gray-500">Contact Phone</span>
                  <div className=" text-gray-500 font-semibold">+91 99887 66554</div>
                </div>
                <div>
                  <span className="text-gray-500">Contact Email</span>
                  <div className=" text-gray-500 font-semibold">priya.sharma@email.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
