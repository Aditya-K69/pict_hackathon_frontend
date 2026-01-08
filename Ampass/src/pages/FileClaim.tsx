import { useState } from "react";

interface UploadedFile {
  id: number;              // local UI id
  serverId?: number;       // DB id from backend
  name: string;
  size: string;
  uploaded: string;
  type: string;
  uploading?: boolean;
  error?: boolean;
}

export default function FileClaim() {
  const [step, setStep] = useState<number>(1);
  const [claimType, setClaimType] = useState<string>("");
  const [policyNumber, setPolicyNumber] = useState<string>("");
  const [incidentDate, setIncidentDate] = useState<string>("");
  const [incidentDescription, setIncidentDescription] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleContinueToEvidence = (): void => {
    setStep(2);
  };

  const handleBack = (): void => {
    setStep(1);
  };

  const handleContinue = (): void => {
    window.location.href = "/claimreview";
  };

  // 🔴 REAL BACKEND UPLOAD
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const file of files) {
      const tempId = Date.now() + Math.random();

      // optimistic UI entry
      setUploadedFiles(prev => [
        ...prev,
        {
          id: tempId,
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          uploaded: "uploading...",
          type: file.name.split(".").pop() || "unknown",
          uploading: true
        }
      ]);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await fetch("http://localhost:4000/users/upload", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          },
          body: formData
        });

        if (!res.ok) throw new Error("upload_failed");

        const data = await res.json();
        // { id, name, size, path }

        setUploadedFiles(prev =>
          prev.map(f =>
            f.id === tempId
              ? {
                  ...f,
                  uploading: false,
                  uploaded: "just now",
                  serverId: data.id
                }
              : f
          )
        );
      } catch {
        setUploadedFiles(prev =>
          prev.map(f =>
            f.id === tempId
              ? { ...f, uploading: false, error: true }
              : f
          )
        );
      }
    }

    e.target.value = "";
  };

  const removeFile = (id: number): void => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b px-8 py-4 flex justify-between">
        <div className="flex items-center gap-3">
          <img src="claimit-logo-3.jpg" className="h-12" />
          <span className="text-xl font-semibold">Claimit</span>
        </div>
        <button
          onClick={() => window.location.href = "/user-dashboard"}
          className="text-gray-600"
        >
          Dashboard
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">

        {step === 1 ? (
          <>
            <h1 className="text-3xl font-bold mb-6">File a New Claim</h1>

            <div className="bg-white p-6 border rounded-lg">
              <label className="block mb-4">
                Type of Claim
                <select
                  value={claimType}
                  onChange={e => setClaimType(e.target.value)}
                  className="w-full border p-2 rounded mt-1"
                >
                  <option value="">Select...</option>
                  <option value="health">Health</option>
                  <option value="auto">Auto</option>
                  <option value="home">Home</option>
                </select>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Policy Number"
                  value={policyNumber}
                  onChange={e => setPolicyNumber(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="date"
                  value={incidentDate}
                  onChange={e => setIncidentDate(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>

              <textarea
                value={incidentDescription}
                onChange={e => setIncidentDescription(e.target.value)}
                className="border p-2 rounded w-full mt-4"
                rows={4}
                placeholder="Describe the incident..."
              />

              <button
                onClick={handleContinueToEvidence}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
              >
                Continue to Evidence →
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">Upload Documents</h1>

            <div className="border-dashed border-2 p-10 text-center bg-white rounded mb-6">
              <label className="text-blue-600 cursor-pointer">
                Click to upload
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.pdf"
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG or PDF (MAX. 15MB)
              </p>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="bg-white p-6 border rounded">
                <h3 className="font-semibold mb-4">
                  Attached Files ({uploadedFiles.length})
                </h3>

                {uploadedFiles.map(file => (
                  <div
                    key={file.id}
                    className="flex justify-between items-center border p-3 rounded mb-2"
                  >
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">
                        {file.size} · {file.uploaded}
                      </p>
                      {file.error && (
                        <p className="text-xs text-red-600">
                          Upload failed
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeFile(file.id)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button onClick={handleBack}>Back</button>
              <button
                onClick={handleContinue}
                className="bg-blue-600 text-white px-6 py-2 rounded"
              >
                Continue →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
