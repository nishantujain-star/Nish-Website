import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, navigationLinks } from '../mockData';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-warm)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="heading-3 mb-4 text-xl">Smart Rewards</h3>
            <p className="body-small mb-4">
              Empowering Indian businesses with world-class loyalty and incentive solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="body-small hover:text-green-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="body-small hover:text-green-600 transition-colors">
                  Dealer Loyalty
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="body-small hover:text-green-600 transition-colors">
                  Channel Programs
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="body-small hover:text-green-600 transition-colors">
                  Sales Incentives
                </Link>
              </li>
              <li>
                <Link to="/programs" className="body-small hover:text-green-600 transition-colors">
                  Loyalty Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} style={{ color: 'var(--accent-text)', marginTop: '2px' }} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="body-small hover:text-green-600 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} style={{ color: 'var(--accent-text)', marginTop: '2px' }} />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="body-small hover:text-green-600 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} style={{ color: 'var(--accent-text)', marginTop: '2px' }} />
                <span className="body-small">{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          <p className="body-small">
            © {new Date().getFullYear()} Smart Rewards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
