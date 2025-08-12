import React, { useState } from "react";
import { Download, Upload, FileSignature } from "lucide-react";
import OtherNavbar from '../components/layout/OtherNavbar';
import jsPDF from "jspdf";

export default function NonDisclosureAgreement() {
  const [signatureOption, setSignatureOption] = useState("upload");
  const [accepted, setAccepted] = useState(false);
  const [showNdaModal, setShowNdaModal] = useState(false);

  // NDA text for PDF
  const ndaText = `
HEADSTART INVESTMENT PLATFORM
NON-DISCLOSURE AGREEMENT

1. PARTIES
This Non-Disclosure Agreement (Agreement) is entered into between Headstart Inc., a Delaware corporation ("Headstart"), and the undersigned investor ("Recipient").

2. CONFIDENTIAL INFORMATION
For purposes of this Agreement, "Confidential Information" includes all non-public, proprietary information disclosed by Headstart, including but not limited to: investment opportunities, startup profiles, financial data, business plans, market analysis, investor lists, and any other information marked as confidential.

3. OBLIGATIONS OF RECIPIENT
Recipient agrees to:
• Maintain strict confidentiality of all Confidential Information
• Not use Confidential Information except for evaluation of investment opportunities
• Make reasonable efforts to safeguard and prevent unauthorized access
• Not disclose Confidential Information to third parties without written consent
• Take all reasonable precautions to protect Confidential Information

4. PERMITTED DISCLOSURES
This Agreement does not apply to information that:
• Is publicly known before signing this Agreement
• Was lawfully received from other sources
• Is required by law/regulation for disclosure
• Is independently developed without use of Confidential Information

5. RETURN OF INFORMATION
Upon request or termination of disclosures, Recipient will promptly return or destroy all Confidential Information and any copies thereof.

6. NO INVESTMENT OBLIGATION
This Agreement does not create any obligation to invest or guarantee any investment opportunities. All investments are subject to separate agreements and due diligence.

7. TERM
This Agreement remains in effect for a period of five (5) years from the date of execution, unless terminated earlier by mutual consent.

8. REMEDIES
Recipient acknowledges that breach of this Agreement may cause irreparable harm, and Headstart shall be entitled to seek injunctive relief and monetary damages.

9. GOVERNING LAW
This Agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.

10. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties regarding confidentiality and supersedes all prior agreements on this subject.
`;

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(10);
    doc.text(ndaText, 10, 10);
    doc.save("Headstart_NDA.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <OtherNavbar />
      <div className="flex flex-col items-center justify-start flex-1 px-2 py-8 mt-8">
        <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FileSignature size={36} className="text-indigo-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Non-Disclosure Agreement</h1>
            <p className="text-gray-500 text-center max-w-xl">
              To proceed with accessing our curated investment opportunities, please review and sign our NDA to protect confidential information.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Option 1 */}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center border">
              <h2 className="font-semibold text-gray-700 mb-4">Option 1: Download & View NDA</h2>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold mb-3 w-full justify-center">
                <Download size={20} /> Download NDA
              </button>
              <span className="text-xs text-gray-500 mb-4">Download PDF for offline review</span>
              <button
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg font-semibold w-full justify-center"
                onClick={() => setShowNdaModal(true)}
              >
                <FileSignature size={20} /> View & Sign NDA Online
              </button>
              <span className="text-xs text-gray-500 mt-2">Review the complete NDA document</span>
            </div>
            {/* Option 2 */}
            <div className="rounded-xl p-6 flex flex-col items-center border border-indigo-300">
              <h2 className="font-semibold text-gray-700 mb-4">Option 2: Upload Signed NDA</h2>
              <div className="w-full flex flex-col items-center justify-center border-2 border-indigo-300 rounded-xl py-10 cursor-pointer mb-2">
                <Upload size={32} className="text-indigo-400 mb-2" />
                <span className="text-gray-500 text-sm mb-1">Click to upload or drag and drop</span>
                <span className="text-xs text-gray-400">PDF, DOC, DOCX files accepted</span>
              </div>
            </div>
          </div>
          {/* Digital Signature Options */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6 border">
            <h3 className="font-semibold text-gray-700 mb-3">Digital Signature Options</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="signatureOption"
                  value="upload"
                  checked={signatureOption === "upload"}
                  onChange={() => setSignatureOption("upload")}
                  className="accent-indigo-600 w-5 h-5"
                />
                <span className="text-gray-700 font-medium">Upload Signed Document</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="signatureOption"
                  value="manual"
                  checked={signatureOption === "manual"}
                  onChange={() => setSignatureOption("manual")}
                  className="accent-indigo-600 w-5 h-5"
                />
                <span className="text-gray-700 font-medium">Manual Digital Signature</span>
              </label>
              <button
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold w-40"
                disabled={!accepted}
                style={{ opacity: accepted ? 1 : 0.5, cursor: accepted ? "pointer" : "not-allowed" }}
              >
                Sign NDA
              </button>
            </div>
          </div>
          {/* Terms and Policy */}
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="accent-indigo-600"
            />
            <span className="text-xs text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-indigo-600 underline">Terms and Conditions</a> and{" "}
              <a href="#" className="text-indigo-600 underline">Privacy Policy</a>
              {" "}of Headstart. I understand that all information shared will be kept confidential and used solely for investment opportunity matching purposes.
            </span>
          </div>
        </div>
      </div>
      {/* NDA Modal */}
      {showNdaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setShowNdaModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Non-Disclosure Agreement</h2>
            <div className="mb-6 text-xs text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto px-2">
              <div className="font-bold text-center mb-2">HEADSTART INVESTMENT PLATFORM<br />NON-DISCLOSURE AGREEMENT</div>
              <b>1. PARTIES</b><br />
              This Non-Disclosure Agreement (Agreement) is entered into between Headstart Inc., a Delaware corporation ("Headstart"), and the undersigned investor ("Recipient").<br /><br />
              <b>2. CONFIDENTIAL INFORMATION</b><br />
              For purposes of this Agreement, "Confidential Information" includes all non-public, proprietary information disclosed by Headstart, including but not limited to: investment opportunities, startup profiles, financial data, business plans, market analysis, investor lists, and any other information marked as confidential.<br /><br />
              <b>3. OBLIGATIONS OF RECIPIENT</b><br />
              Recipient agrees to:<br />
              • Maintain strict confidentiality of all Confidential Information<br />
              • Not use Confidential Information except for evaluation of investment opportunities<br />
              • Make reasonable efforts to safeguard and prevent unauthorized access<br />
              • Not disclose Confidential Information to third parties without written consent<br />
              • Take all reasonable precautions to protect Confidential Information<br /><br />
              <b>4. PERMITTED DISCLOSURES</b><br />
              This Agreement does not apply to information that:<br />
              • Is publicly known before signing this Agreement<br />
              • Was lawfully received from other sources<br />
              • Is required by law/regulation for disclosure<br />
              • Is independently developed without use of Confidential Information<br /><br />
              <b>5. RETURN OF INFORMATION</b><br />
              Upon request or termination of disclosures, Recipient will promptly return or destroy all Confidential Information and any copies thereof.<br /><br />
              <b>6. NO INVESTMENT OBLIGATION</b><br />
              This Agreement does not create any obligation to invest or guarantee any investment opportunities. All investments are subject to separate agreements and due diligence.<br /><br />
              <b>7. TERM</b><br />
              This Agreement remains in effect for a period of five (5) years from the date of execution, unless terminated earlier by mutual consent.<br /><br />
              <b>8. REMEDIES</b><br />
              Recipient acknowledges that breach of this Agreement may cause irreparable harm, and Headstart shall be entitled to seek injunctive relief and monetary damages.<br /><br />
              <b>9. GOVERNING LAW</b><br />
              This Agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law principles.<br /><br />
              <b>10. ENTIRE AGREEMENT</b><br />
              This Agreement constitutes the entire agreement between the parties regarding confidentiality and supersedes all prior agreements on this subject.<br /><br />
              <span className="font-semibold text-gray-600">By clicking "Download PDF" or "Close", you acknowledge that you have read and understood the NDA terms.</span>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-5 py-2 bg-gray-100 rounded-lg text-gray-500"
                onClick={() => setShowNdaModal(false)}
              >
                Close
              </button>
              <button
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold"
                onClick={handleDownloadPdf}
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
