
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-light py-12 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-brand-primary" />
              <span className="text-xl font-bold text-brand-primary">EduAI</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 max-w-xs">
              Transforming education through AI-powered learning and assessment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-600 hover:text-brand-primary">About Us</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-600 hover:text-brand-primary">Contact</Link></li>
                <li><Link to="/careers" className="text-sm text-gray-600 hover:text-brand-primary">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-sm text-gray-600 hover:text-brand-primary">Blog</Link></li>
                <li><Link to="/guides" className="text-sm text-gray-600 hover:text-brand-primary">Guides</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-600 hover:text-brand-primary">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-brand-primary">Privacy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-600 hover:text-brand-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} EduAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
