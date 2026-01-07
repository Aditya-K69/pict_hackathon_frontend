
export default function Dashboard() {

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7f8]">
      {/* Header */}
      <div className="fixed top-0 w-full h-[60px] bg-white flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <img src="claimit-logo-3.jpg" alt="Claimit Logo" className="h-12 w-13" />
          <p className="text-black text-xl font-semibold">Claimit</p>
        </div>
        <div className="flex flex-row gap-7 items-center justify-center">
        <div className="flex flex-col">
           <p className="text-black text-lg cursor-pointer">Shreya G</p>
           <p className="text-gray-500 text-sm cursor-pointer">Policy Holder</p> 
        </div>
          <p className="text-gray-700 text-base cursor-pointer font-semibold">Logout</p>
          <p className="bg-gray-600 text-base cursor-pointer h-13 w-13 rounded-full"></p>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-20 p-6">
        <div className="flex flex-col">
            <h1 className="text-black text-5xl font-bold">Claims Overview</h1>
            <p className="text-gray-500 text-lg mt-2">Track and manage your insurance claims securely.</p>
        </div>
        <button className="bg-blue-500 text-white rounded-xl p-2 h-[50px] text-base font-semibold">
            + File New Claim
        </button>
      </div>

      <div className="flex flex-row gap-10 p-6">

        <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 py-6 px-8">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-500 text-xl font-semibold">Total Claims</p>
                    <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full"></p>
                </div>
                <p className="text-black text-3xl font-bold -mt-2">12</p>
                <p className="text-gray-500 text-sm font-semibold">+2 this month</p>
            </div>
        </div>
         <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 py-6 px-8">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-500 text-xl font-semibold">Approved</p>
                    <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full"></p>
                </div>
                <p className="text-black text-3xl font-bold -mt-2">8</p>
                <p className="text-gray-500 text-sm font-semibold">+2 this month</p>
            </div>
        </div>
         <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 py-6 px-8">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-500 text-xl font-semibold">Pending</p>
                    <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full"></p>
                </div>
                <p className="text-black text-3xl font-bold -mt-2">3</p>
                <p className="text-gray-500 text-sm font-semibold">+2 this month</p>
            </div>
        </div>
         <div className="h-[170px] w-[460px] bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 py-6 px-8">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-500 text-xl font-semibold">Rejected</p>
                    <p className="bg-gray-200 text-base cursor-pointer h-10 w-10 rounded-full"></p>
                </div>
                <p className="text-black text-3xl font-bold -mt-2">1</p>
                <p className="text-gray-500 text-sm font-semibold">+2 this month</p>
            </div>
        </div>
      </div>

    </div>
  );
}
