import React from "react";
import { FaFolderOpen } from "react-icons/fa6";
import { FaCheckCircle, FaHourglassStart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { LogOut, User } from "lucide-react";

export default function Dashboard() {
  const handleNavigateToFileClaim = (): void => {
    window.location.href = '/FileClaim';
  };

  const handleLogout = (): void => {
    window.location.href = '/login';
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "inline-flex items-center bg-yellow-100 text-yellow-700 rounded-full px-6 py-2 text-base font-medium leading-none";
      case "Approved":
        return "inline-flex items-center bg-green-100 text-green-700 rounded-full px-6 py-2 text-base font-medium leading-none";
      case "Rejected":
        return "inline-flex items-center bg-red-100 text-red-700 rounded-full px-6 py-2 text-base font-medium leading-none";
      default:
        return "text-gray-500";
    }
  };

  const claims = [
    {
      id: "CLM001",
      type: "Health",
      dateFiled: "Dec 24, 2024",
      status: "Pending"
    },
    {
      id: "CLM002",
      type: "Auto",
      dateFiled: "Dec 20, 2024",
      status: "Approved"
    },
    {
      id: "CLM003",
      type: "Property",
      dateFiled: "Dec 18, 2024",
      status: "Approved"
    },
    {
      id: "CLM004",
      type: "Health",
      dateFiled: "Dec 15, 2024",
      status: "Pending"
    },
    {
      id: "CLM005",
      type: "Travel",
      dateFiled: "Dec 10, 2024",
      status: "Rejected"
    },
    {
      id: "CLM006",
      type: "Auto",
      dateFiled: "Dec 5, 2024",
      status: "Approved"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">
      {/* Header */}
      <div className="fixed top-0 w-full h-[60px] bg-white flex items-center justify-between px-8 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <img src="claimit-logo-3.jpg" alt="Claimit Logo" className="h-12 w-13" />
          <p className="text-black text-xl font-semibold">Claimit</p>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-black text-base font-semibold">Ganesh G</p>
              <p className="text-gray-500 text-sm">Policy Holder</p> 
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <LogOut size={18} />
            <span className="text-sm font-semibold">Logout</span>
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-20 p-6">
        <div className="flex flex-col">
          <h1 className="text-black text-5xl font-bold">Claims Overview</h1>
          <p className="text-gray-500 text-lg mt-2">Track and manage your insurance claims securely.</p>
        </div>
        <button 
          onClick={handleNavigateToFileClaim}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-5 h-[50px] text-base font-semibold transition-colors"
        >
          + File New Claim
        </button>
      </div>

      <div className="flex flex-row gap-10 p-6 -mt-6">
        <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 py-6 px-8">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-500 text-xl font-semibold">Total Claims</p>
              <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full">
                <FaFolderOpen className="h-5 w-5 translate-x-3 translate-y-2 text-blue-500" />
              </p>
            </div>
            <p className="text-black text-3xl font-bold -mt-2">12</p>
            
          </div>
        </div>
        
        <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 py-6 px-8">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-500 text-xl font-semibold">Approved</p>
              <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full">
                <FaCheckCircle className="h-6 w-6 translate-x-2 translate-y-2 text-green-600" />
              </p>
            </div>
            <p className="text-black text-3xl font-bold -mt-2">8</p>
            
          </div>
        </div>
        
        <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 py-6 px-8">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-500 text-xl font-semibold">Pending</p>
              <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full">
                <FaHourglassStart className="h-6 w-6 translate-x-2 translate-y-2 text-yellow-600" />
              </p>
            </div>
            <p className="text-black text-3xl font-bold -mt-2">3</p>
           
          </div>
        </div>
        
        <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
          <div className="flex flex-col gap-4 py-6 px-8">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-500 text-xl font-semibold">Rejected</p>
              <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full">
                <MdCancel className="h-6 w-6 translate-x-2 translate-y-2 text-red-600" />
              </p>
            </div>
            <p className="text-black text-3xl font-bold -mt-2">1</p>
           
          </div>
        </div>
      </div>

      <div className="flex flex-col p-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-black text-2xl font-bold">Recent Activity</h1>
          <p className="text-blue-500 text-base mt-2 font-semibold cursor-pointer hover:text-blue-600">View all history</p>
        </div>

        <div className="p-6">
          <div className="border-2 border-gray-300 rounded-2xl overflow-hidden bg-white text-gray-500 font-semibold">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-300 text-base font-bold">CLAIM ID</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-base font-bold">CLAIM TYPE</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-base font-bold">DATE FILED</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-base font-bold">STATUS</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-base font-bold">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {claims.map((claim, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-center">
                    <td className="px-4 py-3 border-b border-gray-300 text-black font-semibold">{claim.id}</td>
                    <td className="px-4 py-3 border-b border-gray-300">{claim.type}</td>
                    <td className="px-4 py-3 border-b border-gray-300">{claim.dateFiled}</td>
                    <td className="px-4 py-3 border-b border-gray-300">
                      <span className={getStatusClass(claim.status)}>{claim.status}</span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-300">
                      <button className="text-blue-500 hover:text-blue-600 font-semibold">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}