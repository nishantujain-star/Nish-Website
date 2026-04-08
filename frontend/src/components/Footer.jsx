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
          <div>
            <h3 className="heading-3 mb-4 text-xl font-bold">Smart Loyalty</h3>
            <p className="body-small mb-4 leading-relaxed">
              Helping Indian manufacturers sell more through their dealer and distributor networks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="space-y-1">
              {navigationLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-column">
            <h4>Solutions</h4>
            <div className="space-y-1">
              <Link to="/solutions" className="footer-link">
                Dealer Loyalty
              </Link>
              <Link to="/solutions" className="footer-link">
                Channel Programs
              </Link>
              <Link to="/solutions" className="footer-link">
                Sales Incentives
              </Link>
              <Link to="/programs" className="footer-link">
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
