import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div 
        className="p-8 rounded-xl text-center"
        style={{ 
          background: 'var(--accent-wash)', 
          border: '2px solid var(--accent-primary)' 
        }}
      >
        <CheckCircle2 
          size={64} 
          style={{ color: 'var(--accent-text)', margin: '0 auto 1.5rem' }}
        />
        <h3 className="heading-3 mb-3">Thank You!</h3>
        <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="name" 
            className="block body-medium font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border transition-colors"
            style={{ 
              borderColor: 'var(--border-medium)',
              background: 'var(--bg-card)'
            }}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block body-medium font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border transition-colors"
            style={{ 
              borderColor: 'var(--border-medium)',
              background: 'var(--bg-card)'
            }}
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label 
            htmlFor="phone" 
            className="block body-medium font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border transition-colors"
            style={{ 
              borderColor: 'var(--border-medium)',
              background: 'var(--bg-card)'
            }}
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label 
            htmlFor="company" 
            className="block body-medium font-medium mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border transition-colors"
            style={{ 
              borderColor: 'var(--border-medium)',
              background: 'var(--bg-card)'
            }}
            placeholder="ABC Manufacturing"
          />
        </div>
      </div>

      <div>
        <label 
          htmlFor="message" 
          className="block body-medium font-medium mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          Tell us about your needs
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border transition-colors resize-none"
          style={{ 
            borderColor: 'var(--border-medium)',
            background: 'var(--bg-card)'
          }}
          placeholder="Tell us about your dealer network size, current challenges, and what you're looking to achieve..."
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Request Demo
      </button>
    </form>
  );
};

export default ContactForm;
