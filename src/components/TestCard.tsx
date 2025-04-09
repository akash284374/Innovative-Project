
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BarChart2, Award } from 'lucide-react';

interface TestCardProps {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  questionsCount: number;
  onStart: () => void;
}

const TestCard: React.FC<TestCardProps> = ({
  title,
  description,
  difficulty,
  duration,
  questionsCount,
  onStart
}) => {
  const difficultyColor = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-amber-100 text-amber-800',
    advanced: 'bg-red-100 text-red-800'
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge className={difficultyColor[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{duration} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{questionsCount} questions</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">AI-generated feedback</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onStart} 
          className="w-full bg-brand-primary hover:bg-brand-dark"
        >
          Start Test
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TestCard;
