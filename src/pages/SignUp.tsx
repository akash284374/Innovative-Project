
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/AuthLayout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Form validation
    if (!formData.fullName || !formData.email || !formData.password) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms and Conditions",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }
    
    // Simulate account creation
    setTimeout(() => {
      toast({
        title: "Account created",
        description: "Your account has been successfully created! Please log in.",
      });
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Create your account" 
      description="Enter your details to get started with EduAI."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 8 characters long
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox 
            id="agreeToTerms" 
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => 
              setFormData({...formData, agreeToTerms: checked as boolean})
            }
          />
          <Label htmlFor="agreeToTerms" className="text-sm font-normal">
            I agree to the <Link to="/terms" className="text-brand-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-brand-primary hover:underline">Privacy Policy</Link>
          </Label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brand-primary hover:bg-brand-dark"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-brand-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
