
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-brand-primary" />
          <span className="text-xl font-bold text-brand-primary">EduAI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-primary">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand-primary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brand-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:flex">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-primary hover:bg-brand-dark">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
