import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import { Flame, Zap, Shield, MapPin, Activity, Users, Star, FileText, BarChart3, HeartPulse, Cpu, FlaskConical, Microscope } from 'lucide-react';

const ProductPerformance = () => {
  return (
    <>
      <OtherNavbar />
      <div className="px-4 md:px-10 py-8 bg-gray-50 min-h-screen mt-12">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-1 text-gray-700">Browse Projects</h1>
          <p className="text-gray-700 mb-4">Discover innovative startups and investment opportunities</p>

          {/* Tabs */}
          <div className="flex gap-4 mt-6 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg font-semibold shadow-sm">Browse Projects</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-sm">My Offers</button>
          </div>

          {/* Breadcrumb */}
          <div className="mb-6">
            <span className="text-sm text-gray-700">&larr; Back to Exchange / </span>
            <span className="text-sm text-gray-700 font-semibold">NeuroPath AI</span>
          </div>

          {/* Card Container */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-10">
              {/* LEFT SIDE */}
              <div>
                {/* Tags & Title */}
                <div className="flex flex-wrap gap-2 mb-2 text-xs">
                  <span className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-lg font-semibold">
                    <Flame className="w-3 h-3" /> TRENDING
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg font-semibold">
                    <Zap className="w-3 h-3" /> Beta Testing
                  </span>
                  <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-lg font-semibold">
                    <Shield className="w-3 h-3" /> FDA Track
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-1 text-gray-700">NeuroPath AI</h2>
                <p className="text-sm text-gray-700 mb-3">
                  Revolutionary AI-powered neurological disease detection platform using advanced imaging analysis
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 text-xs font-semibold mb-4">
                  <span className="flex items-center gap-1 bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg">
                    <HeartPulse className="w-3 h-3" /> Healthcare
                  </span>
                  <span className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-lg">
                    <Cpu className="w-3 h-3" /> AI/ML
                  </span>
                  <span className="flex items-center gap-1 bg-pink-100 text-pink-600 px-2 py-1 rounded-lg">
                    <FlaskConical className="w-3 h-3" /> MedTech
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-100 text-yellow-600 px-2 py-1 rounded-lg">
                    <Microscope className="w-3 h-3" /> Research
                  </span>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-xs text-gray-700 mb-6 flex-wrap">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Boston, USA</span>
                  <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> Updated 2 hours ago</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 2,407 views</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> 4.9 rating</span>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-6 text-sm font-semibold border-b pb-2 mb-2">
                  <span className="text-gray-500 cursor-pointer">Overview</span>
                  <span className="text-gray-500 cursor-pointer">Technical Specs</span>
                  <span className="text-gray-500 cursor-pointer">Features</span>
                  <span className="text-blue-600 border-b-2 border-blue-600 cursor-pointer">Performance</span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {[
                    {
                      label: "Early disease detection accuracy vs traditional methods",
                      value: "96.3%",
                      change: "+11.5%",
                      changeType: "up",
                      changeColor: "bg-green-100 text-green-700",
                      bar: "96%",
                      selected: false,
                    },
                    {
                      label: "Analysis time in seconds (90s vs 72 hours traditional)",
                      value: "87s",
                      change: "-4233s",
                      changeType: "down",
                      changeColor: "bg-red-100 text-red-600",
                      bar: "80%",
                      selected: false,
                    },
                    {
                      label: "System availability and reliability",
                      value: "99.97%",
                      change: "+0.22%",
                      changeType: "up",
                      changeColor: "bg-green-100 text-green-700",
                      bar: "99%",
                      selected: false,
                    },
                    {
                      label: "Healthcare professional satisfaction rating",
                      value: "4.9/5",
                      change: "+0.436/5",
                      changeType: "up",
                      changeColor: "bg-green-100 text-green-700",
                      bar: "98%",
                      selected: true,
                    },
                    {
                      label: "Scans processed per hour",
                      value: "2847/hr",
                      change: "+924/hr",
                      changeType: "up",
                      changeColor: "bg-green-100 text-green-700",
                      bar: "85%",
                      selected: false,
                    },
                    {
                      label: "Average response time in milliseconds",
                      value: "23ms",
                      change: "-22ms",
                      changeType: "down",
                      changeColor: "bg-red-100 text-red-600",
                      bar: "70%",
                      selected: false,
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-white rounded-xl shadow p-3 flex flex-col gap-1 border transition-all ${
                        item.selected ? "border-2 border-blue-500" : "border"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-blue-700">{item.value}</span>
                        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.changeColor}`}>
                          {item.changeType === "up" ? (
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M10 14V6M10 6L6 10M10 6L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          ) : (
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M10 6v8M10 14l4-4M10 14l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          )}
                          {item.change}
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-500">{item.label}</div>
                      <div className="mt-1">
                        <div className="w-full h-1 bg-blue-100 rounded">
                          <div className="h-1 bg-blue-600 rounded" style={{ width: item.bar }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Metrics */}
                <div className="bg-white mt-6 p-4 border rounded-xl shadow flex flex-col md:flex-row gap-4 items-stretch">
                  {/* Left: Icon + Heading + Stats */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-3">
                      {/* Icon */}
                      <div className="bg-blue-600 rounded-lg p-1 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-base text-gray-700">Live Metrics: Detection Accuracy</h4>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-1">
                      <div className="font-semibold text-gray-700 mb-2 text-sm">Current Performance</div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">Current Value</span>
                          <span className="text-lg font-bold text-gray-700">96.3%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">Previous Period</span>
                          <span className="font-semibold text-gray-500 text-xs">84.8%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">Improvement</span>
                          <span className="font-semibold text-green-600 text-xs">+13.6%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right: Chart */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="bg-gray-50 rounded-lg p-3 h-full flex flex-col">
                      <div className="font-semibold text-gray-700 mb-2 text-sm flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        Performance Trend
                      </div>
                      <div className="flex flex-col items-center justify-center h-full">
                        {/* Bar Chart */}
                        <div className="flex items-end gap-1 h-16 w-full mb-1">
                          {[60, 40, 50, 70, 55, 75, 30, 80, 25, 65, 50, 55].map((h, i) => (
                            <div key={i} className="bg-blue-600 rounded w-3" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                        {/* Months */}
                        <div className="flex justify-between w-full text-xs text-gray-500">
                          {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                            <span key={i} className="w-3 text-center">{m}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">
                {/* Benchmarks */}
                <div className="bg-white border rounded-2xl shadow p-4">
                  <h4 className="font-semibold mb-3 text-base text-gray-700">Detection Accuracy Benchmarks</h4>
                {[
                  {
                    label: "Alzheimer's Detection",
                    ai: 97.2,
                    traditional: 67.3,
                    gain: "+44.5%",
                  },
                  {
                    label: "Parkinson's Detection",
                    ai: 95.8,
                    traditional: 62.1,
                    gain: "+54.3%",
                  },
                  {
                    label: "Dementia Risk Assessment",
                    ai: 96.1,
                    traditional: 58.9,
                    gain: "+63.2%",
                  },
                  {
                    label: "Stroke Prediction",
                    ai: 94.7,
                    traditional: 71.2,
                    gain: "+33.0%",
                  },
                  {
                    label: "Tumor Classification",
                    ai: 98.1,
                    traditional: 78.4,
                    gain: "+25.1%",
                  }
                ].map((item, i) => (
                  <div key={i} className={`rounded-lg border ${i === 2 ? "border-2 border-blue-400" : "border-blue-300"} p-2 mb-2 flex flex-col gap-1 bg-white shadow-sm`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-700 text-xs">{item.label}</span>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-bold text-[10px]">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M10 14V6M10 6L6 10M10 6L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        {item.gain}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-500">NeuroPath AI</span>
                        <span className="text-xs font-bold text-blue-700">{item.ai}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-400">Traditional Methods</span>
                        <span className="text-xs font-bold text-gray-500">{item.traditional}%</span>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      {/* Blue bar */}
                      <div className="flex-1 flex flex-col">
                        <div className="relative w-full h-0.5">
                          <div className="absolute left-0 top-0 h-0.5 rounded bg-blue-100 w-full"></div>
                          <div className="absolute left-0 top-0 h-0.5 rounded" style={{ width: `${item.ai}%`, background: "linear-gradient(90deg,#3b82f6 60%,#6366f1 100%)" }}></div>
                        </div>
                      </div>
                      {/* Gray bar */}
                      <div className="flex-1 flex flex-col">
                        <div className="relative w-full h-0.5">
                          <div className="absolute left-0 top-0 h-0.5 rounded bg-gray-200 w-full"></div>
                          <div className="absolute left-0 top-0 h-0.5 rounded bg-gray-500" style={{ width: `${item.traditional}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>

                {/* Clinical Validation */}
                <div className="bg-blue-50 border rounded-2xl shadow p-0 mt-6">
                  <div className="bg-white rounded-t-xl flex items-center gap-2 px-4 py-2 border-b">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-blue-700 text-sm">Clinical Validation Results</span>
                  </div>
                  <div className="px-4 py-2 grid gap-2">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow flex items-center justify-between px-3 py-2">
                      <div>
                        <div className="font-semibold text-gray-700 text-xs">Participating Medical Centers</div>
                        <div className="text-[10px] text-gray-500">Leading hospitals across North America and Europe</div>
                      </div>
                      <div className="font-bold text-blue-700 text-base">25</div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow flex items-center justify-between px-3 py-2">
                      <div>
                        <div className="font-semibold text-gray-700 text-xs">Patient Scans Analyzed</div>
                        <div className="text-[10px] text-gray-500">Diverse patient demographics and conditions</div>
                      </div>
                      <div className="font-bold text-blue-700 text-base">47,832</div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow flex items-center justify-between px-3 py-2">
                      <div>
                        <div className="font-semibold text-gray-700 text-xs">Clinical Accuracy</div>
                        <div className="text-[10px] text-gray-500">Validated against expert radiologist consensus</div>
                      </div>
                      <div className="font-bold text-blue-700 text-base">96.3%</div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-lg shadow flex items-center justify-between px-3 py-2">
                      <div>
                        <div className="font-semibold text-gray-700 text-xs">False Positive Rate</div>
                        <div className="text-[10px] text-gray-500">Significantly lower than industry standard (8.3%)</div>
                      </div>
                      <div className="font-bold text-blue-700 text-base">2.1%</div>
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

export default ProductPerformance;

