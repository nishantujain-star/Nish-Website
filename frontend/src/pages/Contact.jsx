import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../mockData';

const Contact = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-1 mb-6">Get in Touch</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Ready to transform your dealer network? Schedule a demo or get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 mb-6">Book a Demo</h2>
              
              {submitted ? (
                <div
                  className="p-8 rounded-lg text-center"
                  style={{ background: 'var(--accent-wash)', border: '1px solid var(--accent-primary)' }}
                >
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-text)' }} className="mx-auto mb-4" />
                  <h3 className="heading-3 text-xl mb-2">Thank You!</h3>
                  <p className="body-medium">
                    We've received your request and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block body-medium font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border body-medium"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-card)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block body-medium font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border body-medium"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-card)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block body-medium font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border body-medium"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-card)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block body-medium font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border body-medium"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-card)',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block body-medium font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border body-medium"
                      style={{
                        borderColor: 'var(--border-light)',
                        background: 'var(--bg-card)',
                        transition: 'border-color 0.2s ease',
                        resize: 'vertical'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Request Demo
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-2 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <p className="body-large mb-6">
                    Have questions? Our team is here to help. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-wash)' }}
                    >
                      <Mail size={24} style={{ color: 'var(--accent-text)' }} />
                    </div>
                    <div>
                      <h3 className="heading-3 text-lg mb-1">Email Us</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="body-medium hover:underline"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-wash)' }}
                    >
                      <Phone size={24} style={{ color: 'var(--accent-text)' }} />
                    </div>
                    <div>
                      <h3 className="heading-3 text-lg mb-1">Call Us</h3>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="body-medium hover:underline"
                        style={{ color: 'var(--accent-text)' }}
                      >
                        {contactInfo.phone}
                      </a>
                      <p className="body-small mt-1">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-wash)' }}
                    >
                      <MapPin size={24} style={{ color: 'var(--accent-text)' }} />
                    </div>
                    <div>
                      <h3 className="heading-3 text-lg mb-1">Visit Us</h3>
                      <p className="body-medium">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info Card */}
                <div
                  className="mt-8 p-6 rounded-lg"
                  style={{ background: 'var(--accent-wash)', border: '1px solid var(--accent-primary)' }}
                >
                  <h3 className="heading-3 text-lg mb-3">What happens next?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} style={{ color: 'var(--accent-text)', marginTop: '2px', flexShrink: 0 }} />
                      <span className="body-small">We'll reach out within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} style={{ color: 'var(--accent-text)', marginTop: '2px', flexShrink: 0 }} />
                      <span className="body-small">Schedule a personalized demo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} style={{ color: 'var(--accent-text)', marginTop: '2px', flexShrink: 0 }} />
                      <span className="body-small">Discuss your specific requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={20} style={{ color: 'var(--accent-text)', marginTop: '2px', flexShrink: 0 }} />
                      <span className="body-small">Get a customized solution proposal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
