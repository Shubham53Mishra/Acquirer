import React from "react";
import Navbar from "../components/layout/Navbar";

export default function LegalCompliance() {
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
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Investment Background
            </button>
            <button className="bg-[#3b28ff] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow">
              Legal & Compliance
            </button>
          </div>
          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            {/* Investment Motivation & Objectives */}
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-gray-900 mb-2">Investment Motivation & Objectives</h4>
              <div className="text-xs text-gray-400 mb-4">
                Define your investment goals and motivations to align with suitable opportunities.
              </div>
              <div className="grid grid-cols-4 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Investment Motivation</span>
                  <div className="font-semibold text-gray-500">Financial Returns & Innovation</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Timeline</span>
                  <div className="font-semibold text-gray-500">3-7 years</div>
                </div>
                <div>
                  <span className="text-gray-500">Exit Strategy</span>
                  <div className="font-semibold text-gray-500">IPO/Acquisition</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Objectives</span>
                  <div className="font-semibold text-gray-500">Growth & Diversification</div>
                </div>
              </div>
            </div>
            {/* Legal & Regulatory Status and Risk & Compliance Assessment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legal & Regulatory Status */}
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-gray-900 mb-2">Legal & Regulatory Status</h4>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Legal Representation</span>
                    <div className="font-semibold text-gray-500">Retained Counsel</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Regulatory Compliance</span>
                    <div className="font-semibold text-gray-500">Fully Compliant</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Accredited Investor Status</span>
                    <div className="font-semibold text-gray-500">Yes - Verified</div>
                  </div>
                  <div>
                    <span className="text-gray-500">SEC Filings</span>
                    <div className="font-semibold text-gray-500">Current</div>
                  </div>
                  <div>
                    <span className="text-gray-500">AML Compliance</span>
                    <div className="font-semibold text-gray-500">Compliant</div>
                  </div>
                  <div>
                    <span className="text-gray-500">KYC Status</span>
                    <div className="font-semibold text-gray-500">Complete</div>
                  </div>
                </div>
              </div>
              {/* Risk & Compliance Assessment */}
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-gray-900 mb-2">Risk & Compliance Assessment</h4>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Conflict of Interest</span>
                    <div className="font-semibold text-gray-500">None Declared</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Political Exposure</span>
                    <div className="font-semibold text-gray-500">None</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Professional References</span>
                    <div className="font-semibold text-gray-500">5+ Available</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sanctions Check</span>
                    <div className="font-semibold text-gray-500">Clear</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Risk Assessment</span>
                    <div className="font-semibold text-gray-500">High Net Worth</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Compliance Officer</span>
                    <div className="font-semibold text-gray-500">John Compliance</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Compliance Documentation */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="font-bold text-gray-900 mb-2 md:mb-0">Compliance Documentation</h4>
                <div className="text-xs text-gray-500">
                  Last Review: <span className="font-semibold text-black">2024-01-15</span> &nbsp; Next Review: <span className="font-semibold text-black">2024-07-15</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm mb-4">
                Comprehensive documentation ensuring regulatory compliance and legal requirements for investment activities.
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="py-2 pr-4">Document Type</th>
                      <th className="py-2 pr-4">Status</th>
                      <th className="py-2 pr-4">Issuer</th>
                      <th className="py-2 pr-4">Last Updated</th>
                      <th className="py-2 pr-4">Expiry/Review</th>
                      <th className="py-2 pr-4">Reference</th>
                      <th className="py-2 pr-4">Size</th>
                      <th className="py-2 pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">Accredited Investor Verification <div className="text-xs text-gray-400 font-normal">Certificate</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Verified</td>
                      <td className="py-2 pr-4 text-gray-500">SEC Qualified Third Party</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-10</td>
                      <td className="py-2 pr-4 text-gray-500">2025-01-10</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">AIV-2024-001</td>
                      <td className="py-2 pr-4 text-gray-500">2.4 MB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">Anti-Money Laundering Check <div className="text-xs text-gray-400 font-normal">Background Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Clear</td>
                      <td className="py-2 pr-4 text-gray-500">Thomson Reuters</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-08</td>
                      <td className="py-2 pr-4 text-gray-500">2024-07-08</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">AML-2024-008</td>
                      <td className="py-2 pr-4 text-gray-500">1.8 MB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">KYC Documentation <div className="text-xs text-gray-400 font-normal">Identity Verification</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Complete</td>
                      <td className="py-2 pr-4 text-gray-500">Jumio Compliance</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-05</td>
                      <td className="py-2 pr-4 text-gray-500">Annual Review</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">KYC-2024-005</td>
                      <td className="py-2 pr-4 text-gray-500">3.2 MB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">SEC Form D Filings <div className="text-xs text-gray-400 font-normal">Regulatory Filing</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Current</td>
                      <td className="py-2 pr-4 text-gray-500">SEC EDGAR</td>
                      <td className="py-2 pr-4 text-gray-500">2023-12-15</td>
                      <td className="py-2 pr-4 text-gray-500">Ongoing</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">FORMD-2023-15</td>
                      <td className="py-2 pr-4 text-gray-500">836 KB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">Tax Compliance Certificate <div className="text-xs text-gray-400 font-normal">Tax Document</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Valid</td>
                      <td className="py-2 pr-4 text-gray-500">IRS</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-01</td>
                      <td className="py-2 pr-4 text-gray-500">2024-12-31</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">TCC-2024-001</td>
                      <td className="py-2 pr-4 text-gray-500">1.6 MB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">Professional References <div className="text-xs text-gray-400 font-normal">Reference Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Verified</td>
                      <td className="py-2 pr-4 text-gray-500">Internal Compliance</td>
                      <td className="py-2 pr-4 text-gray-500">2023-12-20</td>
                      <td className="py-2 pr-4 text-gray-500">Biannual Review</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">REF-2023-004</td>
                      <td className="py-2 pr-4 text-gray-500">945 KB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">OFAC Sanctions Screening <div className="text-xs text-gray-400 font-normal">Sanctions Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Clear</td>
                      <td className="py-2 pr-4 text-gray-500">Dow Jones Risk Center</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-12</td>
                      <td className="py-2 pr-4 text-gray-500">2024-04-12</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">OFAC-2024-012</td>
                      <td className="py-2 pr-4 text-gray-500">678 KB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-blue-900 text-gray-500">PEP Screening Report <div className="text-xs text-gray-400 font-normal">Political Exposure</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold text-gray-500">Clear</td>
                      <td className="py-2 pr-4 text-gray-500">World-Check</td>
                      <td className="py-2 pr-4 text-gray-500">2024-01-12</td>
                      <td className="py-2 pr-4 text-gray-500">2024-04-12</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer text-gray-500">PEP-2024-012</td>
                      <td className="py-2 pr-4 text-gray-500">1.1 MB</td>
                      <td className="py-2 pr-4 text-gray-500">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
