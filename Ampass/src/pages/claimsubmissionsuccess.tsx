import {
  FiCheckCircle,
  FiEye,
  FiHelpCircle,
} from "react-icons/fi";
import {
  BsHash,
  BsCalendar,
  BsSearch,
  BsCashStack,
} from "react-icons/bs";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineGavel } from "react-icons/md";


export default function ClaimSubmissionSuccess() {

  const handleGoToDashboard = () => {
   
    window.location.href = "/user-dashboard";
  };
  return (
    <div className="min-h-screen bg-[#f6f7f8] px-6 py-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
          <FiCheckCircle className="text-green-600 text-4xl" />
        </div>

        {/* Heading */}
        <div className="text-center">
          <p className="text-2xl font-semibold text-black">
            Claim Submitted Successfully
          </p>
          <p className="text-sm text-gray-500 mt-2 max-w-md">
            We have received your claim request for the incident. A confirmation
            email has been sent to{" "}
            <span className="font-medium">user@email.com</span>.
          </p>
        </div>

        {/* Small Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-1">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <BsHash /> Claim ID
            </p>
            <p className="font-semibold text-black">CLM-78342</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-1">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <HiOutlineClipboardCheck /> Current Status
            </p>
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Under Review
            </span>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-1">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <BsCalendar /> Date Submitted
            </p>
            <p className="font-semibold text-black">15 Jan 2026</p>
          </div>
        </div>

        {/* Claim Progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 w-full">
          <p className="font-semibold text-black mb-6">Claim Progress</p>

          <div className="flex flex-col gap-0">

            {/* Submitted */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <FiCheckCircle />
                </div>
                <div className="w-[2px] h-10 bg-green-500" />
              </div>
              <div>
                <p className="font-semibold text-black">Submitted</p>
                <p className="text-sm text-gray-500">
                  Your claim has been successfully received.
                </p>
              </div>
            </div>

            {/* Under Review */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <BsSearch />
                </div>
                <div className="w-[2px] h-10 bg-gray-200" />
              </div>
              <div>
                <p className="font-semibold text-blue-700">Under Review</p>
                <p className="text-sm text-gray-500">
                  Our team is currently reviewing the details of your incident.
                </p>
              </div>
            </div>

            {/* Decision */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  <MdOutlineGavel />
                </div>
                <div className="w-[2px] h-10 bg-gray-200" />
              </div>
              <div>
                <p className="font-semibold text-gray-400">Decision</p>
                <p className="text-sm text-gray-400">
                  A decision will be made after review.
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  <BsCashStack />
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-400">Payment</p>
                <p className="text-sm text-gray-400">
                  Approved claims will be paid out.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700">
            <FiEye /> Track Claim Status
          </button>
        <button 
            onClick={handleGoToDashboard}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Help */}
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <FiHelpCircle />
          <span className="underline cursor-pointer">
            Need help? Contact Support
          </span>
        </div>

      </div>
    </div>
  );
}
