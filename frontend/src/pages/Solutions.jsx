import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { solutionsDetailed } from '../mockData';

const Solutions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-1 mb-6">Programs That Increase Dealer Sales</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Whether you sell through 50 dealers or 500 distributors—choose the program that fits your network
          </p>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {solutionsDetailed.map((solution, index) => (
              <div
                key={solution.id}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="heading-2 mb-4">{solution.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="heading-3 text-lg mb-2" style={{ color: 'var(--accent-text)' }}>
                        For Whom
                      </h3>
                      <p className="body-medium">{solution.forWhom}</p>
                    </div>

                    <div>
                      <h3 className="heading-3 text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                        The Problem
                      </h3>
                      <p className="body-medium">{solution.problem}</p>
                    </div>

                    <div>
                      <h3 className="heading-3 text-lg mb-2" style={{ color: 'var(--accent-text)' }}>
                        Our Solution
                      </h3>
                      <p className="body-medium">{solution.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="p-8 rounded-lg"
                    style={{
                      background: 'var(--accent-wash)',
                      border: '1px solid var(--accent-primary)'
                    }}
                  >
                    <h3 className="heading-3 text-xl mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={24}
                            style={{ color: 'var(--accent-text)', flexShrink: 0, marginTop: '2px' }}
                          />
                          <span className="body-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto text-center">
          <h2 className="heading-2 mb-4">Not Sure Which Program You Need?</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Book a demo and we'll help you choose the right solution for your business
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

export default Solutions;
