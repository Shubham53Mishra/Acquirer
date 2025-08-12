import React from "react";
import { useState } from "react";
import jsPDF from "jspdf";
import Navbar from "../components/layout/Navbar";

export default function SubmitOffer() {
  const [showNdaModal, setShowNdaModal] = useState(false);
  const [currency, setCurrency] = useState("");
  const [ndaAccepted, setNdaAccepted] = useState(false); // NDA checkbox state

  const ndaText = `Non-Disclosure Agreement\n\n1. Definition of Confidential Information\nFor purposes of this Agreement, 'Confidential Information' shall include all information or proprietary materials...\n\n2. Non-Disclosure Obligations\nThe Receiving Party agrees to hold and maintain the Confidential Information in strict confidence...\n\n3. Term and Termination\nThis Agreement shall remain in effect for a period of five (5) years...\n\n4. Legal Remedies\nThe Receiving Party agrees that any breach...\n\n5. Governing Law\nThis Agreement shall be governed by and construed in accordance with the laws of India.`;

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(ndaText, 10, 10);
    doc.save("NDA.pdf");
  };

  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 p-4">
        <Navbar />
        {/* NDA Modal Popup */}
        {showNdaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-12 relative">
              <h2 className="text-2xl font-bold mb-2 text-gray-600">Non-Disclosure Agreement</h2>
              <p className="text-gray-500 mb-4">Please review and accept the NDA terms before proceeding</p>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                onClick={() => setShowNdaModal(false)}
              >
                &times;
              </button>
              {/* Download button right aligned */}
              <div className="flex justify-end mb-4">
                <button
                  className="bg-indigo-500 text-white px-4 py-2 rounded"
                  onClick={handleDownloadPdf}
                >
                  Download
                </button>
              </div>
              <div className="bg-gray-50 rounded p-4 mb-4 text-sm max-h-[600px] overflow-y-auto text-gray-600" style={{whiteSpace: 'pre-line'}}>
                {ndaText}
              </div>
              {/* Checkbox and buttons row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="ndaAccept"
                    checked={ndaAccepted}
                    onChange={e => setNdaAccepted(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="ndaAccept" className="text-sm text-gray-500">
                    I have read and agree to the terms of this Non-Disclosure Agreement
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-gray-100 rounded text-gray-500" onClick={() => setShowNdaModal(false)}>
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                    disabled={!ndaAccepted}
                    style={{ opacity: ndaAccepted ? 1 : 0.5, cursor: ndaAccepted ? "pointer" : "not-allowed" }}
                  >
                    Accept & Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl font-bold mb-1 mt-8 text-gray-600">Submit Your Offer</h1>
          <p className="text-gray-500 mb-4">
            Make an investment offer for EcoTech Solutions
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Sidebar */}
            <div className="bg-white rounded-lg shadow p-3 min-h-[350px]">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 text-white text-xl font-bold rounded-md mb-3">
                ET
              </div>
              <h2 className="font-semibold text-base text-gray-600">EcoTech Solutions</h2>
              <p className="text-sm text-gray-500 mt-1">
                Sustainable technology platform for carbon emissions tracking and
                reduction insights.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-500">Current Valuation</p>
                <p className="font-semibold text-gray-400">₹2.5Cr</p>
                <p className="text-sm text-gray-500 mt-2">Industry</p>
                <p className="font-semibold text-gray-400">CleanTech</p>
                <p className="text-sm text-gray-500 mt-2">Founded</p>
                <p className="font-semibold text-gray-400">2020</p>
                <p className="text-sm text-gray-500 mt-2">Employees</p>
                <p className="font-semibold text-gray-400">25</p>
                <p className="text-sm text-gray-500 mt-2">Location</p>
                <p className="font-semibold text-gray-400">Bengaluru, India</p>
              </div>
              <div className="mt-4 border-t pt-2">
                <h3 className="text-xs font-semibold mb-1">Key Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    Monthly Revenue: <span className="text-green-500">₹75k</span>
                  </li>
                  <li>
                    Growth Rate: <span className="text-green-500">+45% MoM</span>
                  </li>
                  <li>Active Users: 12,000+</li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-3 min-h-[450px]">
              <h2 className="text-base font-semibold mb-2 text-gray-600">Investment Details</h2>
              <p className="text-xs text-gray-500 mb-3">
                Provide your investment terms and conditions
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-400">
                    Investment Amount
                  </label>
                  <input
                    type="text"
                    placeholder="Enter amount (e.g. INR, $USD)"
                    className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-gray-400">
                    Currency
                  </label>
                  <select
                    className={`w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currency ? "text-gray-500" : "text-gray-400"}`}
                    value={currency}
                    onChange={e => setCurrency(e.target.value)}
                  >
                    <option value="" disabled>Select currency</option>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Investment Type
                </label>
                <select className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-400">
                  <option>Equity Funding</option>
                  <option>Debt Funding</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-xs font-medium mb-1 text-gray-400">
                  Additional Terms &amp; Message
                </label>
                <textarea
                  className="w-full border rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="2"
                ></textarea>
              </div>

              <div className="mb-4 border rounded-lg p-2 bg-gray-50">
                <div className="flex items-start gap-2">
                  <div className="mt-1">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1 text-gray-400">
                      Non-Disclosure Agreement Required
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      Before submitting your offer, you will be required to sign
                      the Non-Disclosure Agreement to protect confidential
                      business information.
                    </p>
                    <button
                      className="px-3 py-1.5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-xs"
                      onClick={() => setShowNdaModal(true)}
                    >
                      Review &amp; Sign NDA
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-1.5 border rounded-lg hover:bg-gray-100 text-xs text-gray-400">
                  Cancel Offer
                </button>
                <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 text-xs">
                  Submit Investment Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

