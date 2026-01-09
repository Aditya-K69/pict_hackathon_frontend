import React from "react";

const ClaimReviewDecision: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* TOP BAR */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Claims Portal</h2>
        <span className="text-sm font-medium">Agent Smith</span>
      </header>

      {/* PAGE HEADER */}
      <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Claim #CLM-2023-849</h1>
          <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
            Pending Review
          </span>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg">
            Reject
          </button>
          <button className="px-4 py-2 border rounded-lg bg-gray-50">
            Request Info
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
            Approve Claim
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex max-w-7xl mx-auto">

        {/* LEFT SIDEBAR */}
        <aside className="w-72 bg-white border-r p-6">
          <h3 className="text-lg font-bold mb-1">Sarah Jenkins</h3>
          <p className="text-sm text-gray-500 mb-6">Policy Holder</p>

          <div className="space-y-3 text-sm">
            <p><b>Policy Number:</b> POL-99382-AC</p>
            <p><b>Type:</b> Comprehensive Auto</p>
            <p><b>Coverage:</b> $50,000 / $100,000</p>
            <p><b>Deductible:</b> $500</p>
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="flex-1 p-6 space-y-6">

          {/* INCIDENT REPORT */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold mb-3">Incident Report</h3>
            <p className="text-sm leading-relaxed mb-4">
              I was stopped at a stop sign when a vehicle rear-ended my car,
              causing damage to the rear bumper, trunk lid, and taillights.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg text-sm">
              <div className="flex justify-between mb-2">
                <span>Parts & Labor</span>
                <span>$1,950.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes & Fees</span>
                <span>$500.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total Claim</span>
                <span className="text-blue-600">$2,450.00</span>
              </div>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-bold mb-4">Evidence & Documents</h3>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="border rounded p-3 bg-gray-50">
                Rear Damage Image
              </div>
              <div className="border rounded p-3 bg-gray-50">
                Trunk Damage Image
              </div>
              <div className="border rounded p-3 bg-gray-50">
                Police Report PDF
              </div>
            </div>
          </div>

        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-72 bg-white border-l p-6 flex flex-col">
          <h3 className="font-bold mb-4">Internal Notes</h3>

          <div className="flex-1 space-y-3 text-sm">
            <p><b>Mike Ross:</b> Initial review started.</p>
            <p><b>Jennifer Wu:</b> Estimate validated.</p>
          </div>

          <textarea
            className="border rounded p-2 mt-4 text-sm"
            placeholder="Add a note..."
          />
        </aside>

      </div>
    </div>
  );
};

export default ClaimReviewDecision;
