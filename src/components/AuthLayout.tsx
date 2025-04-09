
import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-brand-primary" />
              <span className="text-2xl font-bold text-brand-primary">EduAI</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          
          {children}
        </div>
      </div>
      
      {/* Right side - image/illustration */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-brand-primary to-brand-dark">
          <div className="flex h-full items-center justify-center">
            <div className="px-8 text-center text-white">
              <h3 className="text-4xl font-bold mb-6">Unlock Your Learning Potential</h3>
              <p className="text-xl mb-8">
                Personalized AI-powered assessments to help you improve and excel.
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Adaptive Testing</h4>
                  <p className="text-sm">Tests that adjust to your skill level</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="font-bold mb-2">AI Analysis</h4>
                  <p className="text-sm">Smart insights on your performance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h4 className="font-bold mb-2">Progress Tracking</h4>
                  <p className="text-sm">Monitor your growth over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
