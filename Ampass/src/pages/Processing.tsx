import { useState, useEffect } from "react";

export default function ClaimProcessing() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Validating claim details", duration: 1500 },
    { label: "Analyzing uploaded documents", duration: 2000 },
    { label: "Verifying policy information", duration: 1500 },
    { label: "Preparing review summary", duration: 1000 }
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 60);

    // Step progression
    let stepTimeout: ReturnType<typeof setTimeout>;
    let cumulativeDelay = 0;

    steps.forEach((step, index) => {
      stepTimeout = setTimeout(() => {
        setCurrentStep(index);
      }, cumulativeDelay);
      cumulativeDelay += step.duration;
    });

    // Redirect to review page after all steps complete
    const redirectTimeout = setTimeout(() => {
      window.location.href = "/claimreview";
    }, cumulativeDelay + 500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
      clearTimeout(redirectTimeout);
    };
  }, []);

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
          <button className="text-gray-600 hover:text-gray-800">Dashboard</button>
          <button className="text-gray-600 hover:text-gray-800">My Policies</button>
          <button className="text-gray-600 hover:text-gray-800">Support</button>
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-end items-center mb-2">
            <span className="text-sm text-gray-600">Step 2 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: "66%" }}></div>
          </div>
        </div>

        {/* Processing Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
          <div className="flex flex-col items-center text-center">
            {/* Animated Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-10 h-10 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Processing Your Claim</h1>
            <p className="text-gray-600 mb-8">Please wait while we review your information...</p>

            {/* Progress Percentage */}
            <div className="w-full max-w-md mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-semibold text-blue-600">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Steps */}
            <div className="w-full max-w-md space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-blue-50 border border-blue-200' 
                      : index < currentStep 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    index === currentStep
                      ? 'bg-blue-600'
                      : index < currentStep
                      ? 'bg-green-600'
                      : 'bg-gray-300'
                  }`}>
                    {index < currentStep ? (
                      <span className="text-white text-sm">✓</span>
                    ) : index === currentStep ? (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    ) : (
                      <span className="text-white text-xs">{index + 1}</span>
                    )}
                  </div>
                  <span className={`text-sm ${
                    index === currentStep
                      ? 'text-blue-900 font-medium'
                      : index < currentStep
                      ? 'text-green-900'
                      : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                  {index === currentStep && (
                    <div className="ml-auto flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">ℹ</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">What's happening?</h3>
              <p className="text-xs text-gray-600">We're securely processing your claim information and preparing it for review. This usually takes just a few seconds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}