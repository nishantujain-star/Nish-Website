import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import NextSteps from '../components/NextSteps';

const Contact = () => {
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

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="heading-2 mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info - Takes 1 column */}
            <div>
              <h2 className="heading-2 mb-8">Contact Information</h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-4xl">
          <NextSteps />
        </div>
      </section>
    </div>
  );
};

export default Contact;
