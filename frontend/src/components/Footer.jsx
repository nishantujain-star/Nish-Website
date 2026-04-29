import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, navigationLinks } from '../mockData';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="footer-column">
            <img 
              src="https://customer-assets.emergentagent.com/job_smart-rewards-6/artifacts/lhz8pea6_Logo%203%20HD.png" 
              alt="Smart Loyalty" 
              className="footer-logo"
            />
            <p className="body-small leading-relaxed" style={{ maxWidth: '280px' }}>
              Helping Indian companies develop and expand dealer and distributor Loyalty.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="footer-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h4>Solutions</h4>
            <div className="space-y-1">
              <Link 
                to="/solutions#dealer-loyalty" 
                className="footer-link"
                onClick={() => setTimeout(() => {
                  const element = document.getElementById('dealer-loyalty');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)}
              >
                Dealer Loyalty
              </Link>
              <Link 
                to="/solutions#channel-programs" 
                className="footer-link"
                onClick={() => setTimeout(() => {
                  const element = document.getElementById('channel-programs');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)}
              >
                Channel Programs
              </Link>
              <Link 
                to="/solutions#sales-incentives" 
                className="footer-link"
                onClick={() => setTimeout(() => {
                  const element = document.getElementById('sales-incentives');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)}
              >
                Sales Incentives
              </Link>
              <Link 
                to="/programs#loyalty-platform" 
                className="footer-link"
                onClick={() => setTimeout(() => {
                  const element = document.getElementById('loyalty-platform');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)}
              >
                Loyalty Platform
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={16} style={{ color: 'var(--brand-yellow)', marginTop: '3px', flexShrink: 0 }} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="footer-link mb-0 hover:text-green-700"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} style={{ color: 'var(--brand-yellow)', marginTop: '3px', flexShrink: 0 }} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="footer-link mb-0 hover:text-green-700"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} style={{ color: 'var(--brand-yellow)', marginTop: '3px', flexShrink: 0 }} />
                <span className="body-small">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="body-small">
            © {new Date().getFullYear()} Smart Loyalty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
