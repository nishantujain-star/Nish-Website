import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Shield, Award, ArrowRight } from 'lucide-react';
import { aboutData } from '../mockData';

const About = () => {
  const valueIcons = {
    'Customer Success': Users,
    Innovation: Target,
    Integrity: Shield,
    Excellence: Award
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-1 mb-6">About Smart Loyalty</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <h2 className="heading-2 mb-6 text-center">How We Started</h2>
          <p className="body-large text-center" style={{ color: 'var(--text-body)' }}>
            {aboutData.story}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                  {stat.value}
                </div>
                <p className="body-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What We Stand For</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Four principles that guide how we work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.values.map((value, index) => {
              const IconComponent = valueIcons[value.title] || Award;
              return (
                <div
                  key={index}
                  className="product-card"
                  style={{ cursor: 'default' }}
                >
                  <div className="mb-4">
                    <IconComponent size={36} style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                  <p className="body-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-wash)' }}
              >
                <Target size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">We Know India</h3>
              <p className="body-small">
                We've worked with dealers from Mumbai to Ludhiana. We understand how Indian businesses actually work.
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-wash)' }}
              >
                <Users size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">Proven Results</h3>
              <p className="body-small">
                Over 450 companies trust us with their dealer programs. 92% stay with us year after year.
              </p>
            </div>

            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-wash)' }}
              >
                <Award size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">Support When You Need It</h3>
              <p className="body-small">
                Dedicated account manager. Direct phone support. We respond to issues within 4 hours, not 4 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Book a demo and see if Smart Rewards is right for your business
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8">
            Book a Demo
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
