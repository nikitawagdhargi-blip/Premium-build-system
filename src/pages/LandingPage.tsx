import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Video, BarChart3 } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code className="w-12 h-12 text-primary-600" />,
      title: "Practice Problems",
      description: "Access a vast library of coding challenges and technical questions"
    },
    {
      icon: <Video className="w-12 h-12 text-primary-600" />,
      title: "Mock Interviews",
      description: "Simulate real interview experiences with AI-powered interviewers"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary-600" />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ace Your <span className="text-primary-600">Placement</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Practice, assess, and prepare for your dream job with our comprehensive platform
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Placement Readiness Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;