import React from 'react';

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Resources</h1>
        <p className="text-gray-600">Access study materials and preparation guides</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Guides</h3>
          <p className="text-gray-600">Comprehensive guides for technical interview preparation</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
          <p className="text-gray-600">Step-by-step video explanations of key concepts</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Profiles</h3>
          <p className="text-gray-600">Learn about interview processes at top companies</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Resume Builder</h3>
          <p className="text-gray-600">Create professional resumes tailored for placements</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;