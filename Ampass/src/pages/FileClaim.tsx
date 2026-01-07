import { useState } from "react";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  uploaded: string;
  type: string;
  uploading?: boolean;
  progress?: number;
}

export default function FileClaim() {
  const [step, setStep] = useState<number>(1);
  const [claimType, setClaimType] = useState<string>("");
  const [policyNumber, setPolicyNumber] = useState<string>("");
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [incidentDescription, setIncidentDescription] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    { id: 1, name: "Hospital_Bill_Oct24.pdf", size: "2.4 MB", uploaded: "2 mins ago", type: "pdf" },
    { id: 2, name: "Car_Damage_Front.jpg", size: "4.1 MB", uploaded: "2 mins ago", type: "jpg" },
    { id: 3, name: "Car_Damage_Side.png", size: "3.8 MB", uploaded: "2 mins ago", uploading: true, progress: 60, type: "png" }
  ]);

  const handleContinueToEvidence = (): void => {
    setStep(2);
  };

  const handleBack = (): void => {
    setStep(1);
  };

  const handleContinue = (): void => {
    alert("Claim submitted successfully!");
    window.location.href = "/user-dashboard";
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files || []);
    const newFiles: UploadedFile[] = files.map((file, index) => ({
      id: uploadedFiles.length + index + 1,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      uploaded: "just now",
      type: file.name.split('.').pop() || 'unknown'
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (id: number): void => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
          <img src="claimit-logo-3.jpg" alt="Claimit Logo" className="h-12 w-13" />
          
        </div>
          <span className="text-xl font-semibold text-gray-800">Claimit</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => window.location.href = '/user-dashboard'} className="text-gray-600 hover:text-gray-800">Dashboard</button>
          <button className="text-gray-600 hover:text-gray-800">My Policies</button>
          <button className="text-gray-600 hover:text-gray-800">Support</button>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {step === 1 ? (
          <>
            {/* Step 1: Claim Details */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">File a New Claim</h1>
              <p className="text-gray-600">We're sorry to hear about the incident. Please provide the details below to get started.</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600">Step 1 of 3</span>
                <span className="text-sm text-gray-500">Next: Evidence Upload</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "33%" }}></div>
              </div>
            </div>

            {/* Claim Details Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Claim Details</h2>

              <div>
                {/* Type of Claim */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Claim</label>
                  <select
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select claim type...</option>
                    <option value="health">Health Insurance</option>
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="life">Life Insurance</option>
                  </select>
                </div>

                {/* Policy Number and Date */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
                    <input
                      type="text"
                      value={policyNumber}
                      onChange={(e) => setPolicyNumber(e.target.value)}
                      placeholder="e.g., POL-1234567B"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Incident</label>
                    <input
                      type="date"
                      value={incidentDate}
                      onChange={(e) => setIncidentDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Incident Description */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Incident Description</label>
                  <textarea
                    value={incidentDescription}
                    onChange={(e) => setIncidentDescription(e.target.value)}
                    placeholder="Please describe what happened in detail, including time, location, and involved parties..."
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => window.location.href = '/user-dashboard'}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleContinueToEvidence}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    Continue to Evidence
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">ℹ</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Be Specific</h3>
                    <p className="text-xs text-gray-600">Provide as much detail as possible to speed up the approval process.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">📅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Accurate Dates</h3>
                    <p className="text-xs text-gray-600">Ensure the incident date matches any official reports (e.g., police report).</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Secure Form</h3>
                    <p className="text-xs text-gray-600">Your data is encrypted and secure. We value your privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Step 2: Documentation */}
            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">Home / Claims / File New Claim</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">File New Claim</h1>
              <p className="text-gray-600">Provide details to help us process your claim quickly.</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-end items-center mb-2">
                <span className="text-sm text-gray-600">Step 2 of 4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "50%" }}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs font-medium text-blue-600">Documentation</span>
                <span className="text-xs text-gray-400">Review</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Upload Section */}
              <div className="col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Upload Documents</h2>
                  <p className="text-sm text-gray-600 mb-6">Please upload all relevant documents to support your claim. This includes medical bills, repair estimates, and photos of the damage.</p>

                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 text-2xl">☁️</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">
                        <label htmlFor="file-upload" className="text-blue-600 cursor-pointer hover:underline">
                          Click to upload
                        </label>
                        <span> or drag and drop</span>
                      </p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or PDF (MAX. 10MB)</p>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".svg,.png,.jpg,.jpeg,.pdf"
                      />
                    </div>
                  </div>

                  {/* Quick Upload Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      <span>📄</span> Medical Bills
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      <span>🚔</span> Police Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      <span>📸</span> Damage Photos
                    </button>
                  </div>
                </div>

                {/* Attached Files */}
                {uploadedFiles.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Attached Files ({uploadedFiles.length})</h3>
                    <div className="space-y-3">
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded flex items-center justify-center ${
                                file.type === 'pdf' ? 'bg-red-100' : 'bg-blue-100'
                              }`}>
                                <span className="text-lg">{file.type === 'pdf' ? '📄' : '🖼️'}</span>
                              </div>
                              <div>
                                <p className="font-medium text-sm text-gray-900">{file.name}</p>
                                <p className="text-xs text-gray-500">{file.size} • Uploaded {file.uploaded}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFile(file.id)}
                              className="text-gray-400 hover:text-red-600"
                            >
                              {file.uploading ? '🗑️' : '✕'}
                            </button>
                          </div>
                          {file.uploading && (
                            <div className="mt-3">
                              <div className="w-full bg-gray-200 rounded-full h-1">
                                <div 
                                  className="bg-blue-600 h-1 rounded-full transition-all"
                                  style={{ width: `${file.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Required Documents Sidebar */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-blue-600">ℹ️</span>
                    <h3 className="font-semibold text-gray-900">Required Documents</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-900">Proof of Incident</p>
                        <p className="text-xs text-gray-600">Such as police statement.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-900">Photos</p>
                        <p className="text-xs text-gray-600">Clear images of damage from multiple angles.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5"></div>
                      <div>
                        <p className="font-medium text-sm text-gray-900">Estimates / Invoices</p>
                        <p className="text-xs text-gray-600">Repair quotes or medical bills.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-medium text-gray-900 mb-2">NEED HELP?</p>
                    <p className="text-xs text-gray-600 mb-3">If you don't have all documents right now, you can save your progress and return later.</p>
                    <button className="text-sm text-blue-600 hover:underline">Save & Exit →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-between items-center mt-8 pb-8">
              <button
                onClick={handleBack}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Back
              </button>
              <div className="text-xs text-gray-500">
                By clicking Continue, you certify that the attached documents are authentic.
              </div>
              <button
                onClick={handleContinue}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Continue
                <span>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}