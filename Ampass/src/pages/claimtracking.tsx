import React from 'react';

// Types
interface ClaimInfo {
  id: string;
  status: 'submitted' | 'in-review' | 'decision' | 'approved' | 'denied';
  incidentDate: string;
  submittedDate: string;
  type: string;
  amount: number;
  policyNumber: string;
  vehicle: string;
  location: string;
  description: string;
}

interface Document {
  id: string;
  name: string;
  size: string;
  date: string;
  type: 'pdf' | 'image';
}

interface Remark {
  id: string;
  author: string;
  role: string;
  message: string;
  timestamp: string;
  avatar: string;
}

interface TimelineStep {
  id: string;
  label: string;
  date: string;
  status: 'completed' | 'active' | 'pending';
  icon: string;
}

// Sample Data
const claimData: ClaimInfo = {
  id: 'CLM-2024-8892',
  status: 'in-review',
  incidentDate: 'Oct 09, 2024',
  submittedDate: 'Oct 10, 2024',
  type: 'Vehicle Accident',
  amount: 2500.00,
  policyNumber: 'POL-9982-AC',
  vehicle: 'Maruti Suzuki Alto',
  location: 'Pune, Maharashtra',
  description: 'I was stopped at a red light on Navale Bridge when a Hyundai Creta rear-ended my vehicle. There is visible damage to the rear bumper and trunk lid. No injuries reported on the scene. Police report filed.'
};

const documents: Document[] = [
  { id: '1', name: 'Police_Report_8892.pdf', size: '1.2 MB', date: 'Oct 10, 2024', type: 'pdf' },
  { id: '2', name: 'Rear_Bumper_Damage.jpg', size: '3.4 MB', date: 'Oct 09, 2024', type: 'image' },
  { id: '3', name: 'Scene_Photo_Wide.jpg', size: '4.1 MB', date: 'Oct 09, 2024', type: 'image' }
];

const remarks: Remark[] = [
  {
    id: '1',
    author: 'Jane Doe',
    role: 'Adjuster',
    message: 'Hello, I have been assigned to your claim. I have reviewed the initial report. Please ensure the clear photos of the license plate of the other vehicle are uploaded if available. I will update the status once the estimate is finalized.',
    timestamp: 'Oct 11, 2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  }
];

const timelineSteps: TimelineStep[] = [
  { id: '1', label: 'Claim Submitted', date: 'Oct 10, 2024', status: 'completed', icon: 'check_circle' },
  { id: '2', label: 'Under Review', date: 'Current Step', status: 'active', icon: 'settings' },
  { id: '3', label: 'Decision', date: 'Pending', status: 'pending', icon: 'gavel' }
];

const ClaimDetailsPage: React.FC = () => {
  const handleUploadDocument = () => {
    alert('Upload document functionality would be implemented here');
  };

  const handleDownloadDocument = (docName: string) => {
    alert(`Downloading ${docName}`);
  };

  const handleDownloadAcknowledgment = () => {
    alert('Downloading acknowledgment document');
  };

  const handleContactSupport = () => {
    alert('Opening support contact form');
  };

  return (
    <div>
      <div className="bg-white min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-900">
              <div className="w-8 h-8 text-blue-500">
                <img src="claimit-logo-3.jpg" alt="Claimit Logo" className="h-9 w-13" />
              </div>
              <h2 className="text-lg font-bold">ClaimIt</h2>
            </div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-9">
                <a href="/user-dashboard" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Dashboard</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Policies</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 text-sm font-medium transition-colors">Support</a>
              </nav>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border border-gray-200"></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <a href="#" className="text-gray-600 hover:underline">Home</a>
            <span className="text-gray-600">/</span>
            <a href="#" className="text-gray-600 hover:underline">My Claims</a>
            <span className="text-gray-600">/</span>
            <span className="text-gray-900 font-medium">Claim #{claimData.id}</span>
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Page Header */}
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-gray-900 text-3xl md:text-4xl font-black">
                      Claim #{claimData.id}
                    </h1>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      In Progress
                    </span>
                  </div>
                  <p className="text-gray-600 text-base max-w-xl">
                    Vehicle accident claim submitted on {claimData.submittedDate}. Currently under review by your adjuster.
                  </p>
                </div>
              </div>

              {/* Claim Details Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-gray-900 text-lg font-bold">Claim Information</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  <DetailItem label="Incident Date" value={claimData.incidentDate} />
                  <DetailItem label="Type of Loss" value={claimData.type} />
                  <DetailItem label="Claim Amount" value={`${claimData.amount.toFixed(2)}`} />
                  <DetailItem label="Policy Number" value={claimData.policyNumber} />
                  <DetailItem label="Vehicle" value={claimData.vehicle} />
                  <DetailItem label="Location" value={claimData.location} />
                  <div className="md:col-span-2 pt-2 border-t border-gray-200 mt-2">
                    <p className="text-gray-600 text-xs uppercase font-semibold tracking-wider mb-2">
                      Description
                    </p>
                    <p className="text-gray-900 text-sm leading-relaxed">
                      {claimData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <h3 className="text-gray-900 text-lg font-bold">Documents</h3>
                  <button 
                    onClick={handleUploadDocument}
                    className="flex items-center gap-1.5 text-blue-500 text-sm font-bold hover:bg-blue-50 px-3 py-1.5 rounded transition-colors"
                  >
                    <span>📤</span>
                    <span>Upload New</span>
                  </button>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {documents.map((doc) => (
                    <DocumentItem 
                      key={doc.id} 
                      document={doc} 
                      onDownload={handleDownloadDocument}
                    />
                  ))}
                </div>
              </div>

              {/* Remarks Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-gray-900 text-lg font-bold">Remarks from Provider</h3>
                </div>
                <div className="p-6">
                  {remarks.map((remark) => (
                    <RemarkItem key={remark.id} remark={remark} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6 sticky top-24">
                <h3 className="text-gray-900 text-lg font-bold mb-6">Status Timeline</h3>
                <div className="space-y-0">
                  {timelineSteps.map((step, index) => (
                    <TimelineItem 
                      key={step.id} 
                      step={step} 
                      isLast={index === timelineSteps.length - 1}
                    />
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3">
                  <button 
                    onClick={handleDownloadAcknowledgment}
                    className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-sm"
                  >
                    <span>📥</span>
                    <span>Download Acknowledgment</span>
                  </button>
                  <button 
                    onClick={handleContactSupport}
                    className="flex w-full items-center justify-center gap-2 rounded-lg h-12 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-bold transition-colors"
                  >
                    <span>🎧</span>
                    <span>Contact Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Helper Components
const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <p className="text-gray-600 text-xs uppercase font-semibold tracking-wider">{label}</p>
    <p className="text-gray-900 text-base font-medium">{value}</p>
  </div>
);

const DocumentItem: React.FC<{ document: Document; onDownload: (name: string) => void }> = ({ document, onDownload }) => (
  <div className="group flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors bg-white">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-2xl ${
      document.type === 'pdf' 
        ? 'bg-red-50 text-red-600' 
        : 'bg-blue-50 text-blue-600'
    }`}>
      {document.type === 'pdf' ? '📄' : '🖼️'}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 truncate">{document.name}</p>
      <p className="text-xs text-gray-600">{document.size} • {document.date}</p>
    </div>
    <button 
      onClick={() => onDownload(document.name)}
      className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
    >
      ⬇️
    </button>
  </div>
);

const RemarkItem: React.FC<{ remark: Remark }> = ({ remark }) => (
  <div className="flex gap-4 items-start">
    <div 
      className="w-10 h-10 rounded-full shrink-0 border border-gray-200 shadow-sm bg-cover bg-center"
      style={{ backgroundImage: `url(${remark.avatar})` }}
    />
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <p className="text-sm font-bold text-gray-900">
            {remark.author} 
            <span className="text-xs font-normal text-gray-600 ml-1">
              ({remark.role})
            </span>
          </p>
        </div>
        <span className="text-xs text-gray-600">{remark.timestamp}</span>
      </div>
      <div className="bg-gray-100 p-4 rounded-xl rounded-tl-none">
        <p className="text-sm text-gray-900 leading-relaxed">{remark.message}</p>
      </div>
    </div>
  </div>
);

const TimelineItem: React.FC<{ step: TimelineStep; isLast: boolean }> = ({ step, isLast }) => {
  const getIconColor = () => {
    switch (step.status) {
      case 'completed': return 'text-blue-500';
      case 'active': return 'text-blue-500 animate-pulse';
      case 'pending': return 'text-gray-300';
    }
  };

  const getTextColor = () => {
    switch (step.status) {
      case 'completed': return 'text-gray-900';
      case 'active': return 'text-blue-500';
      case 'pending': return 'text-gray-500';
    }
  };

  const getLineColor = () => {
    return step.status === 'completed' ? 'bg-blue-500' : 'bg-gray-300';
  };

  const getIcon = () => {
    switch (step.icon) {
      case 'check_circle': return '✓';
      case 'settings': return '⚙️';
      case 'gavel': return '⚖️';
      default: return '•';
    }
  };

  return (
    <div className="grid grid-cols-[32px_1fr] gap-x-3">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 flex items-center justify-center text-xl ${getIconColor()}`}>
          {getIcon()}
        </div>
        {!isLast && <div className={`w-0.5 h-10 ${getLineColor()}`} />}
      </div>
      <div className={`flex flex-col ${isLast ? 'pt-1' : 'pb-6 pt-1'}`}>
        <p className={`text-base font-bold leading-none ${getTextColor()}`}>{step.label}</p>
        <p className="text-gray-600 text-sm mt-1">{step.date}</p>
      </div>
    </div>
  );
};

export default ClaimDetailsPage;