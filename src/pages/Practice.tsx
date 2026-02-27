import React from 'react';

const Practice = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Problems</h1>
        <p className="text-gray-600">Sharpen your coding skills with practice problems</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Structures</h3>
          <p className="text-gray-600">Practice problems on arrays, linked lists, trees, and graphs</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Algorithms</h3>
          <p className="text-gray-600">Master sorting, searching, and dynamic programming concepts</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">System Design</h3>
          <p className="text-gray-600">Prepare for system design interviews with practical scenarios</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Questions</h3>
          <p className="text-gray-600">Practice answering common behavioral interview questions</p>
        </div>
      </div>
    </div>
  );
};

export default Practice;