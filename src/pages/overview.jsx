import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import { Brain, Activity, Shield, FileText, Users, Smartphone, Zap, Database, Globe, Lock, Heart, BarChart3 } from 'lucide-react';

const Overview = () => {
  return (
    <>
      <OtherNavbar />
      <div className="min-h-screen bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-8 py-10">
          {/* Top Header */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">Browse Projects</h1>
          <p className="text-gray-500 mt-2 mb-4">Discover innovative startups and investment opportunities</p>
          <div className="flex gap-4 mt-2 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Browse Projects</button>
            <button className="px-4 py-2 bg-gray-200 rounded">My Offers</button>
          </div>
          {/* Breadcrumb below buttons */}
          <div className="flex items-center gap-2 text-xs mb-6 text-gray-400">
            <span className="hover:underline cursor-pointer font-medium">← Back to Exchange</span>
            <span className="mx-2">|</span>
            <span className="font-medium text-gray-600">NeuroPath AI</span>
          </div>
          {/* Card Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Sub Navigation Tabs */}
            <div className="flex flex-wrap gap-4 mt-2 mb-6 text-sm font-medium">
              <span className="text-blue-600 underline cursor-pointer">Overview</span>
              <span className="text-gray-700 cursor-pointer">Technical Specs</span>
              <span className="text-gray-700 cursor-pointer">Features</span>
              <span className="text-gray-700 cursor-pointer">Performance</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Comprehensive Feature Suite</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <FeatureCard 
                  title="AI-Powered Disease Detection" 
                  icon={<Brain className="w-5 h-5" />}
                  color="purple" 
                />
                <FeatureCard 
                  title="Real-time Image Analysis" 
                  icon={<Activity className="w-5 h-5" />}
                  color="blue" 
                />
                <FeatureCard 
                  title="Healthcare System Integration" 
                  icon={<Database className="w-5 h-5" />}
                  color="orange" 
                />
                <FeatureCard 
                  title="Intelligent Reporting Suite" 
                  icon={<FileText className="w-5 h-5" />}
                  color="pink" 
                />
                <FeatureCard 
                  title="Enterprise Security & Compliance" 
                  icon={<Shield className="w-5 h-5" />}
                  color="green" 
                />
                <FeatureCard 
                  title="Mobile & Remote Access" 
                  icon={<Smartphone className="w-5 h-5" />}
                  color="indigo" 
                />
              </div>
              {/* AI-Powered Disease Detection Details */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <h3 className="font-semibold text-purple-800">AI-Powered Disease Detection</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Early Alzheimer's Detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Parkinson's Disease Identification</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Dementia Risk Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Stroke Prediction Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-700">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Tumor Detection & Classification</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {/* Advanced AI Capabilities */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Advanced AI Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Neural Network Architecture
                    </h3>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div>Convolutional Neural Networks (CNNs)</div>
                      <div>Advanced deep learning architectures</div>
                      <div>Transformer Models</div>
                      <div>Multi-modal processing capabilities</div>
                      <div>Ensemble Learning</div>
                      <div>Combines multiple AI models for accuracy</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Processing Capabilities
                    </h3>
                    <div className="space-y-2 text-sm text-green-700">
                      <div>Real-time Processing</div>
                      <div>Instant analysis of medical images</div>
                      <div>Batch Processing</div>
                      <div>Large-scale dataset analysis</div>
                      <div>Edge Computing</div>
                      <div>On-device processing for speed and privacy</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Integration & Compatibility */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Integration & Compatibility</h2>
                <div className="grid grid-cols-3 gap-4">
                  <IntegrationCard 
                    title="Healthcare Systems" 
                    subtitle="Epic, Cerner, MEDITECH Integration"
                    icon={<Heart className="w-5 h-5" />}
                    color="orange" 
                  />
                  <IntegrationCard 
                    title="Medical Protocols" 
                    subtitle="DICOM, HL7 FHIR Standards"
                    icon={<FileText className="w-5 h-5" />}
                    color="purple" 
                  />
                  <IntegrationCard 
                    title="Security Standards" 
                    subtitle="HIPAA, SOC 2 Type II Compliant"
                    icon={<Lock className="w-5 h-5" />}
                    color="blue" 
                  />
                </div>
              </div>
              {/* Supported Imaging Modalities */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Supported Imaging Modalities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <ModalityCard title="MRI Scans" subtitle="Magnetic resonance imaging analysis" />
                  <ModalityCard title="CT Scans" subtitle="Computed tomography processing" />
                  <ModalityCard title="PET Scans" subtitle="Positron emission tomography" />
                  <ModalityCard title="SPECT" subtitle="Single-photon emission computed tomography" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const FeatureCard = ({ title, icon, color }) => {
  const colorClasses = {
    purple: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 border-purple-200',
    blue: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border-blue-200',
    orange: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 border-orange-200',
    pink: 'bg-gradient-to-br from-pink-100 to-pink-200 text-pink-700 border-pink-200',
    green: 'bg-gradient-to-br from-green-100 to-green-200 text-green-700 border-green-200',
    indigo: 'bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700 border-indigo-200'
  };

  return (
    <div className={`rounded-lg shadow-sm border p-4 text-center transition-all hover:shadow-md hover:scale-105 ${colorClasses[color]}`}>
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <div className="text-sm font-semibold leading-tight">{title}</div>
    </div>
  );
};

const IntegrationCard = ({ title, subtitle, icon, color }) => {
  const colorClasses = {
    orange: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 border-orange-200',
    purple: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 border-purple-200',
    blue: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 border-blue-200'
  };

  return (
    <div className={`rounded-lg shadow-sm border p-4 text-center transition-all hover:shadow-md hover:scale-105 ${colorClasses[color]}`}>
      <div className="flex justify-center mb-2">
        {icon}
      </div>
      <div className="text-sm font-semibold mb-1">{title}</div>
      <div className="text-xs opacity-80">{subtitle}</div>
    </div>
  );
};

const ModalityCard = ({ title, subtitle }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center transition-all hover:shadow-md hover:scale-105">
    <div className="flex justify-center mb-2">
      <BarChart3 className="w-5 h-5 text-gray-600" />
    </div>
    <div className="text-sm font-semibold text-gray-800 mb-1">{title}</div>
    <div className="text-xs text-gray-600">{subtitle}</div>
  </div>
);

export default Overview;