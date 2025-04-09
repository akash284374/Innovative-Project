
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Simple auth check
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the dashboard",
        variant: "destructive"
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  const handleStartTest = (testId: string) => {
    // Navigate to the test page (not implemented in this version)
    toast({
      title: "Test Started",
      description: `You are now taking the test: ${testId}`,
    });
    // navigate(`/test/${testId}`); // For future implementation
  };

  const beginnerTests = [
    {
      id: 'beginner-1',
      title: 'Introduction to AI Concepts',
      description: 'Test your knowledge of basic AI concepts and terminology.',
      difficulty: 'beginner' as const,
      duration: 20,
      questionsCount: 15
    },
    {
      id: 'beginner-2',
      title: 'Machine Learning Basics',
      description: 'Evaluate your understanding of fundamental machine learning principles.',
      difficulty: 'beginner' as const,
      duration: 25,
      questionsCount: 20
    },
    {
      id: 'beginner-3',
      title: 'Data Science Fundamentals',
      description: 'Test your knowledge of data science basics and statistical concepts.',
      difficulty: 'beginner' as const,
      duration: 30,
      questionsCount: 25
    }
  ];

  const intermediateTests = [
    {
      id: 'intermediate-1',
      title: 'Neural Networks & Deep Learning',
      description: 'Challenge your understanding of neural networks and deep learning techniques.',
      difficulty: 'intermediate' as const,
      duration: 45,
      questionsCount: 30
    },
    {
      id: 'intermediate-2',
      title: 'Natural Language Processing',
      description: 'Test your knowledge of NLP concepts and applications.',
      difficulty: 'intermediate' as const,
      duration: 40,
      questionsCount: 25
    },
    {
      id: 'intermediate-3',
      title: 'Computer Vision Principles',
      description: 'Evaluate your understanding of computer vision techniques and applications.',
      difficulty: 'intermediate' as const,
      duration: 35,
      questionsCount: 20
    }
  ];

  const advancedTests = [
    {
      id: 'advanced-1',
      title: 'Reinforcement Learning Advanced',
      description: 'Test your expertise in advanced reinforcement learning concepts.',
      difficulty: 'advanced' as const,
      duration: 60,
      questionsCount: 35
    },
    {
      id: 'advanced-2',
      title: 'AI Ethics & Governance',
      description: 'Evaluate your knowledge of ethical considerations and governance in AI.',
      difficulty: 'advanced' as const,
      duration: 50,
      questionsCount: 30
    },
    {
      id: 'advanced-3',
      title: 'AI Research & Cutting Edge',
      description: 'Test your understanding of the latest research and advancements in AI.',
      difficulty: 'advanced' as const,
      duration: 75,
      questionsCount: 40
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Your AI Learning Journey</h1>
          <p className="text-gray-600">
            Select a test below to assess your knowledge and receive personalized AI feedback.
          </p>
        </div>
        
        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beginner" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerTests.map((test) => (
                <TestCard
                  key={test.id}
                  title={test.title}
                  description={test.description}
                  difficulty={test.difficulty}
                  duration={test.duration}
                  questionsCount={test.questionsCount}
                  onStart={() => handleStartTest(test.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="intermediate" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intermediateTests.map((test) => (
                <TestCard
                  key={test.id}
                  title={test.title}
                  description={test.description}
                  difficulty={test.difficulty}
                  duration={test.duration}
                  questionsCount={test.questionsCount}
                  onStart={() => handleStartTest(test.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTests.map((test) => (
                <TestCard
                  key={test.id}
                  title={test.title}
                  description={test.description}
                  difficulty={test.difficulty}
                  duration={test.duration}
                  questionsCount={test.questionsCount}
                  onStart={() => handleStartTest(test.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
