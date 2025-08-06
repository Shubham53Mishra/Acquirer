import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import { Brain, Activity, Shield, FileText, Users, Smartphone, Zap, Database, Globe, Lock, Heart, BarChart3, Flame } from 'lucide-react';

const Overview = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold text-indigo-700">Headstaart</span>
            <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
              <span className="cursor-pointer">AI Pitch</span>
              <span className="cursor-pointer">Entrepreneurs</span>
              <span className="cursor-pointer">Investors</span>
              <span className="cursor-pointer">Agents</span>
              <span className="cursor-pointer">Events</span>
              <span className="text-indigo-600 border-b-2 border-indigo-600 pb-1 cursor-pointer">Prototype</span>
              <span className="cursor-pointer">Pricing</span>
              <span className="cursor-pointer">Exchange</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">John Smith</span>
            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold">Profile Completion</span>
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><Users className="w-4 h-4 text-gray-500" /></span>
          </div>
        </div>
      </div>
      <OtherNavbar />
      <div className="min-h-screen bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-8 py-10">
          {/* Main Header */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-1">Browse Projects</h1>
          <p className="text-gray-500 mb-4">Discover innovative startups and investment opportunities</p>
          <div className="flex gap-4 mb-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded font-medium">Browse Projects</button>
            <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded font-medium">My Offers</button>
          </div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-6 text-gray-400">
            <span className="hover:underline cursor-pointer font-medium">← Back to Exchange</span>
            <span className="mx-2">|</span>
            <span className="font-medium text-gray-600">NeuroPath AI</span>
          </div>
          {/* NeuroPath AI Card Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Badges Row (above title) */}
            <div className="flex gap-2 mb-4">
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold shadow">
                <Flame className="w-3 h-3" /> TRENDING
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold shadow">
                <Zap className="w-3 h-3" /> Beta Testing
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold shadow">
                <Shield className="w-3 h-3" /> FDA Track
              </span>
            </div>
            {/* Title & Subtitle */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">NeuroPath AI</h2>
            <p className="text-gray-600 mb-3 text-base">Revolutionary AI-powered neurological disease detection platform using advanced imaging analysis</p>
            {/* Category Badges Row (below subtitle) */}
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Healthcare</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">AI/ML</span>
              <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">MedTech</span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">Research</span>
            </div>
            {/* Info Row (below category badges) */}
            <div className="flex flex-wrap gap-6 items-center text-xs mb-6 text-gray-500">
              <div className="flex items-center gap-1"><Globe className="w-3 h-3" /> Boston, USA</div>
              <div className="flex items-center gap-1"><Activity className="w-3 h-3" /> Updated 2 hours ago</div>
              <div className="flex items-center gap-1"><Users className="w-3 h-3" /> 2,847 views</div>
              <div className="flex items-center gap-1"><Heart className="w-3 h-3 text-yellow-500" /> 4.9/5 rating</div>
            </div>
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
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-lg p-2 bg-purple-100"><Brain className="w-7 h-7 text-purple-600" /></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI-Powered Disease Detection</h3>
                    <div className="text-gray-500 text-sm">Detailed capabilities and technical specifications</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow p-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-900 text-sm font-medium">Early Alzheimer's Detection</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow p-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-900 text-sm font-medium">Parkinson's Disease Identification</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow p-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-900 text-sm font-medium">Dementia Risk Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow p-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-900 text-sm font-medium">Stroke Prediction Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-lg shadow p-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-900 text-sm font-medium">Tumor Detection & Classification</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              {/* Advanced AI Capabilities */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Advanced AI Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Neural Network Architecture Card */}
                  <div className="bg-blue-50 rounded-2xl p-6 shadow flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-7 h-7 text-blue-600" /> {/* Increased icon size */}
                      <span className="font-semibold text-blue-700">Neural Network Architecture</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm mb-2">
                      <span className="font-bold text-gray-700">Convolutional Neural Networks (CNNs)</span>
                      <div className="text-gray-500">Specialized for medical imaging analysis with SPECT accuracy</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm mb-2">
                      <span className="font-bold text-gray-700">Transformer Models</span>
                      <div className="text-gray-500">Attention mechanisms for sequence analysis and pattern recognition</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm">
                      <span className="font-bold text-gray-700">Ensemble Learning</span>
                      <div className="text-gray-500">Multiple models voting for enhanced accuracy and reliability</div>
                    </div>
                  </div>
                  {/* Processing Capabilities Card */}
                  <div className="bg-green-50 rounded-2xl p-6 shadow flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-7 h-7 text-green-600" /> {/* Increased icon size */}
                      <span className="font-semibold text-green-700">Processing Capabilities</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm mb-2">
                      <span className="font-bold text-gray-700">Real-time Processing</span>
                      <div className="text-gray-500">Sub-50 second analysis with cloud-based GPU clusters</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm mb-2">
                      <span className="font-bold text-gray-700">Batch Processing</span>
                      <div className="text-gray-500">Instant feedback for research studies</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow text-sm">
                      <span className="font-bold text-gray-700">Edge Computing</span>
                      <div className="text-gray-500">Local processing for sensitive data and offline capabilities</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Integration & Compatibility */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Integration & Compatibility</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-orange-50 rounded-2xl p-6 shadow flex flex-col items-center">
                    <Database className="w-8 h-8 text-orange-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-orange-700 mb-1">Healthcare Systems</div>
                    <div className="text-xs text-gray-600 text-center">Epic EHR Integration<br />Custom API Endpoints<br />Automation Support</div>
                  </div>
                  <div className="bg-purple-50 rounded-2xl p-6 shadow flex flex-col items-center">
                    <FileText className="w-8 h-8 text-purple-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-purple-700 mb-1">Medical Protocols</div>
                    <div className="text-xs text-gray-600 text-center">DICOM 3.0 Standard<br />HL7 FHIR<br />IHE Profiles<br />SNOMED CT Coding</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 shadow flex flex-col items-center">
                    <Shield className="w-8 h-8 text-green-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-green-700 mb-1">Security Standards</div>
                    <div className="text-xs text-gray-600 text-center">HIPAA Compliance<br />ISO 27001 Certified<br />SOC 2 Type II<br />FDA 510(k) Ready</div>
                  </div>
                </div>
              </div>
              {/* Supported Imaging Modalities */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Supported Imaging Modalities</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                    <Brain className="w-7 h-7 text-pink-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-gray-800 mb-1">MRI Scans</div>
                    <div className="text-xs text-gray-600 text-center">T1, T2, FLAIR, DWI</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                    <Activity className="w-7 h-7 text-gray-700 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-gray-800 mb-1">CT Scans</div>
                    <div className="text-xs text-gray-600 text-center">Contrast & Non-contrast</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                    <Zap className="w-7 h-7 text-yellow-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-gray-800 mb-1">PET Scans</div>
                    <div className="text-xs text-gray-600 text-center">FDG-PET, Amyloid PET</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
                    <BarChart3 className="w-7 h-7 text-indigo-500 mb-2" /> {/* Increased icon size */}
                    <div className="font-semibold text-gray-800 mb-1">SPECT</div>
                    <div className="text-xs text-gray-600 text-center">Perfusion, Diffusion</div>
                  </div>
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
  const iconBg = {
    purple: 'bg-purple-100',
    blue: 'bg-green-100',
    orange: 'bg-orange-100',
    pink: 'bg-pink-100',
    green: 'bg-gray-100',
    indigo: 'bg-purple-100'
  };
  const iconColor = {
    purple: 'text-purple-600',
    blue: 'text-green-600',
    orange: 'text-orange-600',
    pink: 'text-pink-600',
    green: 'text-gray-600',
    indigo: 'text-purple-600'
  };
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[120px] transition-all hover:shadow-xl">
      <div className={`rounded-lg p-2 mb-3 ${iconBg[color]}`}>{React.cloneElement(icon, { className: `w-7 h-7 ${iconColor[color]}` })}</div>
      <div className="text-base font-semibold text-gray-900 text-center leading-tight">{title}</div>
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