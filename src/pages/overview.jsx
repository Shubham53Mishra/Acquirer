import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';

const Overview = () => (
  <>
    <OtherNavbar />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Column: Features */}
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Comprehensive Feature Suite</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <FeatureCard title="AI-Powered Disease Detection" color="purple" />
        <FeatureCard title="Real-time Image Analysis" color="blue" />
        <FeatureCard title="Healthcare System Integration" color="orange" />
        <FeatureCard title="Intelligent Reporting Suite" color="pink" />
        <FeatureCard title="Enterprise Security & Compliance" color="green" />
        <FeatureCard title="Mobile & Remote Access" color="yellow" />
      </div>
      <div className="bg-purple-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-purple-700 mb-2 text-sm">AI-Powered Disease Detection</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
          <span>Early Alzheimer's Detection</span>
          <span>Parkinson's Disease Identification</span>
          <span>Dementia Risk Assessment</span>
          <span>Stroke Prediction Analysis</span>
          <span>Tumor Detection & Classification</span>
        </div>
      </div>
    </div>
    {/* Right Column: AI Capabilities, Integration, Modalities */}
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-700 mb-2 text-sm">Neural Network Architecture</h3>
          <ul className="text-xs text-gray-700 list-disc ml-4">
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Transformer Models</li>
            <li>Ensemble Learning</li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-semibold text-green-700 mb-2 text-sm">Processing Capabilities</h3>
          <ul className="text-xs text-gray-700 list-disc ml-4">
            <li>Real-time Processing</li>
            <li>Batch Processing</li>
            <li>Edge Computing</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <IntegrationCard title="Healthcare Systems" color="orange" />
        <IntegrationCard title="Medical Protocols" color="purple" />
        <IntegrationCard title="Security Standards" color="blue" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">Supported Imaging Modalities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <span className="bg-gray-100 rounded px-2 py-1">MRI Scans</span>
          <span className="bg-gray-100 rounded px-2 py-1">CT Scans</span>
          <span className="bg-gray-100 rounded px-2 py-1">PET Scans</span>
          <span className="bg-gray-100 rounded px-2 py-1">SPECT</span>
        </div>
      </div>
    </div>
    </div>
  </>
);

const FeatureCard = ({ title, color }) => (
  <div className={`rounded-lg shadow p-3 text-xs font-semibold bg-${color}-50 text-${color}-700 flex items-center justify-center h-16`}>
    {title}
  </div>
);

const IntegrationCard = ({ title, color }) => (
  <div className={`rounded-lg shadow p-3 text-xs font-semibold bg-${color}-50 text-${color}-700 flex items-center justify-center h-14`}>
    {title}
  </div>
);

export default Overview;
