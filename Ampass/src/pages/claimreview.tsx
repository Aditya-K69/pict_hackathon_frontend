import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------------- TYPES (ADDED ONLY FOR TS) ---------------- */

type ActiveEdit = "policy" | "incident" | "evidence" | null;

interface PolicyInfo {
  policyNumber: string;
  insuredName: string;
  coverageType: string;
}

interface IncidentDetails {
  date: string;
  time: string;
  location: string;
  description: string;
  mapImage: string;
}

interface EvidenceItem {
  type: "image" | "pdf";
  value: string;
}

/* ---------------- COMPONENT ---------------- */
 const ModalWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-lg">
        {children}
      </div>
    </div>
  );

export default function ClaimReview() {
  const navigate = useNavigate();

  /* ---------------- STATE (ADDED, UI SAME) ---------------- */

  const [activeEdit, setActiveEdit] = useState<ActiveEdit>(null);

  const [policyInfo, setPolicyInfo] = useState<PolicyInfo>({
    policyNumber: "AUTO-PL-23981",
    insuredName: "Aarav Mehta",
    coverageType: "Comprehensive Auto Coverage – Plan A",
  });

  const [incidentDetails, setIncidentDetails] = useState<IncidentDetails>({
    date: "14 Jan 2026",
    time: "8:45 PM",
    location: "Andheri East, Mumbai, Maharashtra",
    description:
      "Vehicle was rear-ended at a traffic signal causing damage to the rear bumper and tail lights.",
    mapImage: "/mapimage.png",
  });

  const [evidence, setEvidence] = useState<EvidenceItem[]>([
    { type: "image", value: "/caraccident.jpg" },
    { type: "pdf", value: "Accident_Report.pdf" },
    { type: "image", value: "/road.jpg" },
    { type: "pdf", value: "payment_details.pdf" },
  ]);

  /* ---------------- MODAL WRAPPER (SAME STYLE) ---------------- */

 

  return (
    <div className="min-h-screen bg-[#f6f7f8] px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">

        {/* Step Indicator */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700">
              Step 3 of 3 · Review and Submit
            </p>
            <p className="text-sm font-semibold text-blue-600">100%</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-full bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Page Heading */}
        <div>
          <p className="text-2xl font-semibold text-black">Review Your Claim</p>
          <p className="text-sm text-gray-500 mt-1">
            Please verify the information below is correct before submitting.
          </p>
        </div>

        {/* Policy Information Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-black">Policy Information</p>
            <button
              onClick={() => setActiveEdit("policy")}
              className="text-blue-600 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <hr className="border-gray-200" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-400">Policy Number</p>
              <p className="font-semibold text-black">
                {policyInfo.policyNumber}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Insured Name</p>
              <p className="font-semibold text-black">
                {policyInfo.insuredName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Coverage Type</p>
              <p className="font-semibold text-black">
                {policyInfo.coverageType}
              </p>
            </div>
          </div>
        </div>

        {/* Incident Details Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-black">Incident Details</p>
            <button
              onClick={() => setActiveEdit("incident")}
              className="text-blue-600 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <hr className="border-gray-200" />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <FiCalendar /> Date of Loss
              </p>
              <p className="font-semibold text-black">
                {incidentDetails.date}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <FiClock /> Time
              </p>
              <p className="font-semibold text-black">
                {incidentDetails.time}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <FiMapPin /> Location
            </p>
            <p className="font-semibold text-black">
              {incidentDetails.location}
            </p>

            <div className="mt-3 w-full h-[180px] bg-gray-100 rounded-lg overflow-hidden">
              {incidentDetails.mapImage ? (
                <img
                  src={incidentDetails.mapImage}
                  alt="Location"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  Map Preview
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-400">Description</p>
            <p className="font-medium text-black mt-1">
              {incidentDetails.description}
            </p>
          </div>
        </div>

        {/* Evidence Uploaded Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-black">Evidence Uploaded</p>
            <button
              onClick={() => setActiveEdit("evidence")}
              className="text-blue-600 text-sm font-medium"
            >
              Edit
            </button>
          </div>
          <hr className="border-gray-200" />

          <div className="grid grid-cols-4 gap-4">
            {evidence.map((file, index) => (
              <div
                key={index}
                className="h-[100px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm overflow-hidden"
              >
                {file.type === "image" && file.value ? (
                  <img
                    src={file.value}
                    alt="Evidence"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{file.value || `File ${index + 1}`}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certification Box (UNCHANGED) */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex gap-3">
          <input type="checkbox" className="mt-1" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-blue-900">
              I certify that the information provided is true and accurate
            </p>
            <p className="text-sm text-blue-800">
              By checking this box, I acknowledge that any false claims may
              result in policy cancellation or legal action. I agree to the{" "}
              <span className="underline cursor-pointer">Terms of Service</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 pt-2">
          <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100">
            Back
          </button>
          <button
            onClick={() => navigate("/claimsubmissionsuccess")}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit Claim
          </button>
        </div>
      </div>

      {/* ---------------- EDIT MODALS ---------------- */}

      {activeEdit === "policy" && (
  <ModalWrapper>
    <p className="font-semibold text-black mb-4">Edit Policy Information</p>

    <input
      value={policyInfo.policyNumber}
      onChange={(e) =>
        setPolicyInfo({ ...policyInfo, policyNumber: e.target.value })
      }
      className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg"
      placeholder="Policy Number"
    />

    <input
      value={policyInfo.insuredName}
      onChange={(e) =>
        setPolicyInfo({ ...policyInfo, insuredName: e.target.value })
      }
      className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg"
      placeholder="Insured Name"
    />

    <input
      value={policyInfo.coverageType}
      onChange={(e) =>
        setPolicyInfo({ ...policyInfo, coverageType: e.target.value })
      }
      className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg"
      placeholder="Coverage Type"
    />

    <button
      onClick={() => setActiveEdit(null)}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Save
    </button>
  </ModalWrapper>
)}


      {activeEdit === "incident" && (
        <ModalWrapper>
          <p className="font-semibold text-black mb-4">Edit Incident Details</p>
          {(Object.keys(incidentDetails) as (keyof IncidentDetails)[]).map(
            (key) => (
              <input
                key={key}
                value={incidentDetails[key]}
                onChange={(e) =>
                  setIncidentDetails({
                    ...incidentDetails,
                    [key]: e.target.value,
                  })
                }
                className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg"
              />
            )
          )}
          <button
            onClick={() => setActiveEdit(null)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        </ModalWrapper>
      )}

      {activeEdit === "evidence" && (
        <ModalWrapper>
          <p className="font-semibold text-black mb-4">Edit Evidence</p>
          {evidence.map((file, index) => (
            <input
              key={index}
              value={file.value}
              onChange={(e) => {
                const updated = [...evidence];
                updated[index].value = e.target.value;
                setEvidence(updated);
              }}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Image URL or PDF name"
            />
          ))}
          <button
            onClick={() => setActiveEdit(null)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        </ModalWrapper>
      )}
    </div>
  );
}