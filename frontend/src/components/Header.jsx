import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationLinks } from '../mockData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="nav-header">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_smart-rewards-6/artifacts/ykb845io_Logo%203%20HD.png" 
            alt="Smart Loyalty" 
            className="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="btn-primary btn-header"
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} color="var(--text-primary)" />
          ) : (
            <Menu size={24} color="var(--text-primary)" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg" style={{ borderColor: 'var(--border-light)' }}>
          <nav className="flex flex-col p-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''} mb-2`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
