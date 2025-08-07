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
          </div>
        </div>
      </div>
    </>
  );
}
