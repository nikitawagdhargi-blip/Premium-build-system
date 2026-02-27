import React from 'react';

const Assessments = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessments</h1>
        <p className="text-gray-600">Take mock tests and assessments to evaluate your skills</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Assessment</h3>
          <p className="text-gray-600">Comprehensive coding test covering DSA and problem-solving</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mock Interview</h3>
          <p className="text-gray-600">Simulated interview experience with feedback and evaluation</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Aptitude Test</h3>
          <p className="text-gray-600">Quantitative and logical reasoning assessment</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">English Proficiency</h3>
          <p className="text-gray-600">Test your communication and comprehension skills</p>
        </div>
      </div>
    </div>
  );
};

export default Assessments;