
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, CheckCircle, Award, BarChart, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-primary to-brand-dark text-white py-20">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Your Learning with AI-Powered Education
              </h1>
              <p className="text-xl">
                Personalized assessments, instant feedback, and adaptive learning paths designed to help you excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button className="bg-white text-brand-primary hover:bg-brand-light hover:text-brand-dark text-lg px-8 py-6">
                    Get Started
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float">
                <div className="bg-white/20 w-full h-full rounded-lg flex items-center justify-center">
                  <Brain className="h-24 w-24 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>AI-Powered Evaluation</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-300" />
                  <span>Personalized Progress</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Advanced Features for Enhanced Learning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI-powered platform can revolutionize your educational journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Adaptive Testing</h3>
                <p className="text-gray-600">
                  Tests that adjust in real-time based on your performance, ensuring the perfect challenge level.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Insights</h3>
                <p className="text-gray-600">
                  Receive AI-generated feedback on your strengths and areas for improvement after each test.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BarChart className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Monitor your learning journey with detailed analytics and progress visualization.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-light p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skill Certification</h3>
                <p className="text-gray-600">
                  Earn certificates that verify your knowledge and skills in specific AI domains.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
                <h3 className="text-xl font-bold mb-3">Multiple Difficulty Levels</h3>
                <p className="text-gray-600 mb-6">
                  We offer tests across different skill levels to match your expertise and learning goals.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-green-800">Beginner</h4>
                    <p className="text-sm text-gray-600">For those just starting their AI journey</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-amber-800">Intermediate</h4>
                    <p className="text-sm text-gray-600">For those with foundational knowledge</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-red-800">Advanced</h4>
                    <p className="text-sm text-gray-600">For those seeking expert-level challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already benefiting from our AI-powered educational platform.
            </p>
            <Link to="/signup">
              <Button className="bg-white text-brand-primary hover:bg-brand-light px-8 py-6 text-lg">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
