import React, { useState } from 'react';
import { Search, Bell, Settings, Plus, Filter, ChevronDown, TrendingUp, FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const stats = [
    {
      title: 'Total Claims Received',
      value: '1,248',
      change: '+12% from last month',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Pending Review',
      value: '42',
      change: 'Requires attention',
      icon: Clock,
      color: 'bg-orange-50 text-orange-600',
      changeColor: 'text-orange-600'
    },
    {
      title: 'Approved Claims',
      value: '980',
      change: '78% approval rate',
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Rejected Claims',
      value: '226',
      change: '18% rejection rate',
      icon: XCircle,
      color: 'bg-red-50 text-red-600'
    }
  ];

  const claims = [
    {
      id: '#CLM-2023-001',
      userName: 'Sarah Jenkins',
      userAvatar: 'SJ',
      policyNumber: 'AUTO-99283',
      claimType: 'Vehicle Accident',
      submissionDate: 'Oct 24, 2023',
      status: 'Pending Review',
      statusColor: 'bg-orange-100 text-orange-700',
      action: 'Review'
    },
    {
      id: '#CLM-2023-002',
      userName: 'Michael Chen',
      userAvatar: 'MC',
      policyNumber: 'HOME-11204',
      claimType: 'Property Damage',
      submissionDate: 'Oct 23, 2023',
      status: 'Approved',
      statusColor: 'bg-green-100 text-green-700',
      action: 'View'
    },
    {
      id: '#CLM-2023-003',
      userName: 'Emily Davis',
      userAvatar: 'ED',
      policyNumber: 'LIFE-44219',
      claimType: 'Medical Expense',
      submissionDate: 'Oct 22, 2023',
      status: 'Rejected',
      statusColor: 'bg-red-100 text-red-700',
      action: 'View'
    },
    {
      id: '#CLM-2023-004',
      userName: 'James Wilson',
      userAvatar: 'JW',
      policyNumber: 'AUTO-88123',
      claimType: 'Windshield Repair',
      submissionDate: 'Oct 21, 2023',
      status: 'Pending Review',
      statusColor: 'bg-orange-100 text-orange-700',
      action: 'Review'
    },
    {
      id: '#CLM-2023-005',
      userName: 'Linda Martinez',
      userAvatar: 'LM',
      policyNumber: 'TRAV-33921',
      claimType: 'Flight Cancellation',
      submissionDate: 'Oct 20, 2023',
      status: 'Approved',
      statusColor: 'bg-green-100 text-green-700',
      action: 'View'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
        
            <img src='claimit-logo-3.jpg' className='h-12 w-13'></img>
            <h1 className="text-xl font-bold text-gray-900">Claimit</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600 mt-1">Overview of claim processing activities</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus className="w-5 h-5" />
            <span className="font-medium">New Claim</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {index === 0 && <TrendingUp className="w-4 h-4 text-green-600" />}
                <p className={`text-sm ${stat.changeColor || 'text-gray-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Claim ID or Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors">
                <span className="text-gray-700">{statusFilter}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Claims Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Claim ID</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">User Name</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Policy Number</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Claim Type</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Submission Date</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {claims.map((claim, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{claim.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{claim.userAvatar}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{claim.userName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{claim.policyNumber}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{claim.claimType}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{claim.submissionDate}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${claim.statusColor}`}>
                        {claim.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          claim.action === 'Review' 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        {claim.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">50</span> results
            </p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;