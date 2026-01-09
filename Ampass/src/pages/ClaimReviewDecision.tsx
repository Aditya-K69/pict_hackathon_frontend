import React from "react";
import { FileText, Upload, Mail, Phone, MapPin, CheckCircle, TrendingUp, Menu } from "lucide-react";

const ClaimReviewDecision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* TOP NAVIGATION BAR */}
      <header className="bg-white shadow-sm px-4 md:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src='claimit-logo-3.jpg' className='h-8 w-9 md:h-10 md:w-11' alt="Claimit Logo" />
          <h2 className="text-lg md:text-xl font-bold">Claimit</h2>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block relative">
            <input
              type="text"
              placeholder="Search claims, policies..."
              className="w-40 md:w-64 px-3 py-1.5 text-sm rounded-lg pl-8 bg-gray-50"
            />
            <span className="absolute left-2.5 top-2 text-gray-400">🔍</span>
          </div>
          <button className="sm:hidden p-2">
            <Menu size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
              AS
            </div>
            <span className="hidden md:block text-sm font-medium">Agent Smith</span>
          </div>
        </div>
      </header>

      {/* PAGE HEADER WITH ACTIONS */}
      <div className="bg-white shadow-sm px-4 md:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl font-bold">Claim #CLM-2023-849</h1>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700 whitespace-nowrap">
              Pending Review
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-red-600 rounded-lg hover:bg-red-50">
              ✕ Reject
            </button>
            <button className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium bg-gray-100 rounded-lg hover:bg-gray-200">
              Request Info
            </button>
            <button className="px-3 md:px-5 py-2 text-xs md:text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              ✓ Approve Claim
            </button>
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row max-w-full">

        {/* LEFT SIDEBAR - POLICY HOLDER INFO */}
        <aside className="w-full lg:w-64 bg-white lg:min-h-screen">
          <div className="p-4 md:p-6">
            <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0 mb-4 lg:mb-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-teal-600 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-medium lg:mb-3 flex-shrink-0">
                SJ
              </div>
              <div className="flex-1 lg:text-center">
                <h3 className="text-base lg:text-lg font-bold">Sarah Jenkins</h3>
                <p className="text-sm text-gray-500">Policy Holder</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-4 lg:mb-6">
              <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <Mail size={18} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <Phone size={18} className="text-gray-600" />
              </button>
            </div>

            <div className="pt-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-3">Policy Details</h4>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 text-sm">
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Policy Number</p>
                  <p className="font-medium">POL-99382-AC</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Type</p>
                  <p className="font-medium">Comprehensive Auto</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Effective Date</p>
                  <p className="font-medium">Jan 01, 2023</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Coverage Limit</p>
                  <p className="font-medium">$50,000 / $100,000</p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p className="text-gray-500 text-xs mb-0.5">Deductible</p>
                  <p className="font-medium">$500.00</p>
                </div>
              </div>

              <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                View Full Policy
              </button>
            </div>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="flex-1 p-4 md:p-6 space-y-4">

          {/* AI REVIEW SCORE */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 md:p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-sm md:text-base">AI Review Assessment</h3>
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-600 text-white">
                    Approval Score: 87/100
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 mb-3">
                  Our AI analysis indicates this claim has a high likelihood of approval based on policy coverage, incident details, and supporting documentation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span>Documentation Complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span>Policy Active & Valid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                    <span>Estimate Within Range</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INCIDENT REPORT */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-blue-600" />
                <h3 className="font-bold text-sm md:text-base">Incident Report</h3>
              </div>
              <span className="text-xs text-gray-500">Oct 24, 2023 at 2:30 PM</span>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Description of Loss</h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-700">
                "I was stopped at a stop sign on Main St when a vehicle approached from behind and failed to stop in time, rear-ending my car. There is significant damage to the rear bumper, trunk lid, and taillights. The other driver admitted fault at the scene."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Location</h4>
                <div className="flex items-start gap-2 text-xs md:text-sm mb-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>3rd Ave & 4th Ave, Seattle, WA</span>
                </div>
                <div className="mt-2 h-32 bg-gray-100 rounded overflow-hidden">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center text-xs text-gray-500">
                    Map View
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Claim Estimate</h4>
                <div className="bg-gray-50 p-4 rounded-lg text-xs md:text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Parts & Labor</span>
                    <span className="font-medium">$1,950.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-medium">$500.00</span>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <span className="font-bold">Total Claim</span>
                    <span className="text-lg md:text-xl font-bold text-blue-600">$2,450.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EVIDENCE & DOCUMENTS */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={20} className="text-blue-600" />
              <h3 className="font-bold text-sm md:text-base">Evidence & Documents</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs md:text-sm font-medium truncate">IMG_2041_Rear_Da...</p>
                  <p className="text-xs text-gray-500">2.4 MB • Oct 24</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-32 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">🚙</span>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs md:text-sm font-medium truncate">IMG_2042_Trunk.jpg</p>
                  <p className="text-xs text-gray-500">1.8 MB • Oct 24</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="h-32 bg-red-100 flex items-center justify-center">
                  <FileText size={40} className="text-red-600" />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs md:text-sm font-medium truncate">Police_Report_#88...</p>
                  <p className="text-xs text-gray-500">450 KB • Oct 25</p>
                </div>
              </div>
            </div>

            <button className="mt-4 flex items-center gap-2 text-xs md:text-sm text-blue-600 hover:text-blue-700">
              <Upload size={16} />
              Upload Additional Document
            </button>
          </div>

        </main>

        {/* RIGHT SIDEBAR - INTERNAL NOTES */}
        <aside className="w-full lg:w-80 bg-white lg:min-h-screen">
          <div className="p-4 md:p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                💬
              </div>
              <h3 className="font-bold text-sm md:text-base">Internal Notes</h3>
            </div>

            <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
              <div className="text-xs md:text-sm">
                <div className="flex items-start gap-2 mb-1">
                  <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    MR
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold">Mike Ross</span>
                      <span className="text-xs text-gray-500">Oct 25, 10:00 AM</span>
                    </div>
                    <p className="text-gray-700 mt-1">Initial review started. Police report confirms no injuries reported at the scene.</p>
                  </div>
                </div>
              </div>

              <div className="text-xs md:text-sm">
                <div className="flex items-start gap-2 mb-1">
                  <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                    JW
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold">Jennifer Wu</span>
                      <span className="text-xs text-gray-500">Oct 25, 11:30 AM</span>
                    </div>
                    <p className="text-gray-700 mt-1">Called repair shop. Estimate matches the visible damage in photos. Validated labor rates.</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 text-center py-2">
                System: Status changed to Pending Review
              </div>
            </div>

            <div className="pt-4">
              <textarea
                className="w-full rounded-lg p-3 text-xs md:text-sm resize-none bg-gray-50"
                rows={3}
                placeholder="Add a note..."
              />
              <div className="flex justify-end gap-2 mt-2">
                <button className="p-2 hover:bg-gray-100 rounded">
                  📎
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-blue-700">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default ClaimReviewDecision;