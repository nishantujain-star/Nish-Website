import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../mockData';

const ContactInfoCard = ({ icon: Icon, title, content, href }) => (
  <div 
    className="p-6 rounded-xl"
    style={{ 
      background: 'var(--bg-card)',
      border: '1px solid var(--border-light)'
    }}
  >
    <Icon 
      size={32} 
      style={{ color: 'var(--accent-text)', marginBottom: '1rem' }}
    />
    <h3 className="heading-3 text-base mb-2">{title}</h3>
    {href ? (
      <a
        href={href}
        className="body-medium hover:text-green-700 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
      >
        {content}
      </a>
    ) : (
      <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
        {content}
      </p>
    )}
  </div>
);

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <ContactInfoCard
        icon={Mail}
        title="Email Us"
        content={contactInfo.email}
        href={`mailto:${contactInfo.email}`}
      />
      
      <ContactInfoCard
        icon={Phone}
        title="Call Us"
        content={contactInfo.phone}
        href={`tel:${contactInfo.phone}`}
      />
      
      <ContactInfoCard
        icon={MapPin}
        title="Visit Us"
        content={contactInfo.address}
      />
      
      <div 
        className="p-6 rounded-xl"
        style={{ 
          background: 'var(--accent-wash)',
          border: '1px solid var(--accent-primary)'
        }}
      >
        <h4 
          className="font-semibold mb-2 text-sm"
          style={{ color: 'var(--accent-text)' }}
        >
          Business Hours
        </h4>
        <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
          Mon - Fri, 9:00 AM - 6:00 PM IST
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
