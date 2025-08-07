import React from "react";
import Navbar from "../components/layout/Navbar";

export default function LegalCompliance() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f6fafd] px-4 py-8 md:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
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
                  <div className="font-semibold">Financial Returns & Innovation</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Timeline</span>
                  <div className="font-semibold">3-7 years</div>
                </div>
                <div>
                  <span className="text-gray-500">Exit Strategy</span>
                  <div className="font-semibold">IPO/Acquisition</div>
                </div>
                <div>
                  <span className="text-gray-500">Investment Objectives</span>
                  <div className="font-semibold">Growth & Diversification</div>
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
                    <div className="font-semibold">Retained Counsel</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Regulatory Compliance</span>
                    <div className="font-semibold">Fully Compliant</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Accredited Investor Status</span>
                    <div className="font-semibold">Yes - Verified</div>
                  </div>
                  <div>
                    <span className="text-gray-500">SEC Filings</span>
                    <div className="font-semibold">Current</div>
                  </div>
                  <div>
                    <span className="text-gray-500">AML Compliance</span>
                    <div className="font-semibold">Compliant</div>
                  </div>
                  <div>
                    <span className="text-gray-500">KYC Status</span>
                    <div className="font-semibold">Complete</div>
                  </div>
                </div>
              </div>
              {/* Risk & Compliance Assessment */}
              <div className="bg-white rounded-xl shadow p-6">
                <h4 className="font-bold text-gray-900 mb-2">Risk & Compliance Assessment</h4>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Conflict of Interest</span>
                    <div className="font-semibold">None Declared</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Political Exposure</span>
                    <div className="font-semibold">None</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Professional References</span>
                    <div className="font-semibold">5+ Available</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Sanctions Check</span>
                    <div className="font-semibold">Clear</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Risk Assessment</span>
                    <div className="font-semibold">High Net Worth</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Compliance Officer</span>
                    <div className="font-semibold">John Compliance</div>
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
                      <td className="py-2 pr-4 font-semibold text-blue-900">Accredited Investor Verification <div className="text-xs text-gray-400 font-normal">Certificate</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Verified</td>
                      <td className="py-2 pr-4">SEC Qualified Third Party</td>
                      <td className="py-2 pr-4">2024-01-10</td>
                      <td className="py-2 pr-4">2025-01-10</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">AIV-2024-001</td>
                      <td className="py-2 pr-4">2.4 MB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">Anti-Money Laundering Check <div className="text-xs text-gray-400 font-normal">Background Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Clear</td>
                      <td className="py-2 pr-4">Thomson Reuters</td>
                      <td className="py-2 pr-4">2024-01-08</td>
                      <td className="py-2 pr-4">2024-07-08</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">AML-2024-008</td>
                      <td className="py-2 pr-4">1.8 MB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">KYC Documentation <div className="text-xs text-gray-400 font-normal">Identity Verification</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Complete</td>
                      <td className="py-2 pr-4">Jumio Compliance</td>
                      <td className="py-2 pr-4">2024-01-05</td>
                      <td className="py-2 pr-4">Annual Review</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">KYC-2024-005</td>
                      <td className="py-2 pr-4">3.2 MB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">SEC Form D Filings <div className="text-xs text-gray-400 font-normal">Regulatory Filing</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Current</td>
                      <td className="py-2 pr-4">SEC EDGAR</td>
                      <td className="py-2 pr-4">2023-12-15</td>
                      <td className="py-2 pr-4">Ongoing</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">FORMD-2023-15</td>
                      <td className="py-2 pr-4">836 KB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">Tax Compliance Certificate <div className="text-xs text-gray-400 font-normal">Tax Document</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Valid</td>
                      <td className="py-2 pr-4">IRS</td>
                      <td className="py-2 pr-4">2024-01-01</td>
                      <td className="py-2 pr-4">2024-12-31</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">TCC-2024-001</td>
                      <td className="py-2 pr-4">1.6 MB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">Professional References <div className="text-xs text-gray-400 font-normal">Reference Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Verified</td>
                      <td className="py-2 pr-4">Internal Compliance</td>
                      <td className="py-2 pr-4">2023-12-20</td>
                      <td className="py-2 pr-4">Biannual Review</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">REF-2023-004</td>
                      <td className="py-2 pr-4">945 KB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-semibold text-blue-900">OFAC Sanctions Screening <div className="text-xs text-gray-400 font-normal">Sanctions Check</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Clear</td>
                      <td className="py-2 pr-4">Dow Jones Risk Center</td>
                      <td className="py-2 pr-4">2024-01-12</td>
                      <td className="py-2 pr-4">2024-04-12</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">OFAC-2024-012</td>
                      <td className="py-2 pr-4">678 KB</td>
                      <td className="py-2 pr-4">
                        <button className="text-blue-600 underline mr-2">View</button>
                        <button className="text-blue-600 underline">Download</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-blue-900">PEP Screening Report <div className="text-xs text-gray-400 font-normal">Political Exposure</div></td>
                      <td className="py-2 pr-4 text-green-600 font-semibold">Clear</td>
                      <td className="py-2 pr-4">World-Check</td>
                      <td className="py-2 pr-4">2024-01-12</td>
                      <td className="py-2 pr-4">2024-04-12</td>
                      <td className="py-2 pr-4 text-blue-600 underline cursor-pointer">PEP-2024-012</td>
                      <td className="py-2 pr-4">1.1 MB</td>
                      <td className="py-2 pr-4">
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
