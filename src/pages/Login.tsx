
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import AuthLayout from '@/components/AuthLayout';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    if (!formData.email || !formData.password) {
      toast({
        title: "Missing fields",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }
    
    // Simulate login process
    setTimeout(() => {
      // For demo purposes, any login attempt is successful
      localStorage.setItem('isLoggedIn', 'true');
      toast({
        title: "Login successful",
        description: "Welcome back to EduAI!",
      });
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Log in to your account" 
      description="Enter your credentials to access your EduAI dashboard."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
            <Link 
              to="/forgot-password" 
              className="text-xs font-medium text-brand-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1"
            required
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Checkbox 
            id="rememberMe" 
            name="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => 
              setFormData({...formData, rememberMe: checked as boolean})
            }
          />
          <Label htmlFor="rememberMe" className="text-sm font-normal">
            Remember me
          </Label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brand-primary hover:bg-brand-dark"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Don't have an account yet?{" "}
          <Link to="/signup" className="font-medium text-brand-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
