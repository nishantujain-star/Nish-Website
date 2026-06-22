import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car,
  Smartphone,
  ShoppingCart,
  Home,
  Pill,
  Wallet,
  Factory,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industriesExpanded = [
    {
      id: 1,
      name: 'Automotive',
      description: 'Increase vehicle sales and spare parts orders from dealers',
      details:
        'Reward dealers who achieve monthly vehicle sales targets. Push genuine spare parts sales through service advisors. Track which dealers need inventory support vs which need higher targets.',
      icon: Car,
      useCases: ['Vehicle sales targets', 'Genuine parts push', 'Service retention programs']
    },
    {
      id: 2,
      name: 'Consumer Electronics',
      description: 'Get retailers to display and sell more of your products',
      details:
        'Retailers have limited shelf space. Reward them for prominent product displays and hitting monthly sales targets. Launch new products faster by incentivizing early adopters.',
      icon: Smartphone,
      useCases: ['Retail display incentives', 'New product launch rewards', 'Sales target programs']
    },
    {
      id: 3,
      name: 'FMCG & Consumer Goods',
      description: 'Grow distributor orders and expand into new markets',
      details:
        'Increase order frequency from existing distributors. Reward them for expanding distribution to new towns. Track secondary sales to ensure products actually move off shelves.',
      icon: ShoppingCart,
      useCases: ['Volume growth incentives', 'New market expansion rewards', 'Repeat order bonuses']
    },
    {
      id: 4,
      name: 'Building Materials',
      description: 'Influence contractor specifications and dealer purchases',
      details:
        'Contractors specify which cement, steel, or tiles get used in projects. Track contractor recommendations. Reward them when they specify your brand. Increase dealer offtake simultaneously.',
      icon: Home,
      useCases: ['Contractor specification programs', 'Dealer offtake incentives', 'Project tracking rewards']
    },
    {
      id: 5,
      name: 'Pharmaceuticals',
      description: 'Drive chemist recommendations and stockist orders',
      details:
        'Reward chemists who recommend your brand over generics. Incentivize stockists to maintain inventory levels and achieve monthly distribution targets across their territory.',
      icon: Pill,
      useCases: ['Chemist recommendation programs', 'Stockist volume incentives', 'Territory expansion rewards']
    },
    {
      id: 6,
      name: 'Financial Services',
      description: 'Motivate agents to close more policies and loans',
      details:
        'Insurance agents and DSAs juggle multiple companies. Make yours their priority. Set clear monthly targets, track applications and closures, reward fast converters.',
      icon: Wallet,
      useCases: ['Agent sales targets', 'Lead generation incentives', 'Conversion rate bonuses']
    },
    {
      id: 7,
      name: 'Manufacturing & Industrial',
      description: 'Increase orders from industrial dealers and distributors',
      details:
        'B2B industrial sales cycles are long. Keep dealers engaged with quarterly targets and milestone rewards. Incentivize bulk orders and reward long-term partnerships.',
      icon: Factory,
      useCases: ['Quarterly sales targets', 'Bulk order incentives', 'Partnership retention programs']
    },
    {
      id: 8,
      name: 'Technology & Software',
      description: 'Grow reseller sales and partner certifications',
      details:
        'Resellers sell competing software solutions. Motivate them to prioritize yours. Reward certifications, deal registrations, and closed sales. Track regional partner performance.',
      icon: Lightbulb,
      useCases: ['Reseller sales incentives', 'Certification rewards', 'Deal registration bonuses']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-1 mb-6">Industry-Specific Expertise</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Deep understanding of sector-specific challenges and opportunities across the Indian market
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {industriesExpanded.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <div key={industry.id} className="product-card">
                  <div className="mb-4">
                    <IconComponent size={36} style={{ color: 'var(--accent-text)' }} />
                  </div>
                  <h2 className="heading-3 text-xl mb-2">{industry.name}</h2>
                  <p className="body-small mb-4" style={{ color: 'var(--accent-text)' }}>
                    {industry.description}
                  </p>
                  <p className="body-medium mb-6">{industry.details}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                      Program Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.useCases.map((useCase, idx) => (
                        <span
                          key={`${industry.id}-usecase-${idx}`}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'var(--accent-wash)',
                            color: 'var(--accent-text)',
                            border: '1px solid var(--accent-primary)'
                          }}
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Trusted by Manufacturers Across India</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Real results from real companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                450+
              </div>
              <p className="body-medium">Active Programs</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                1.8M+
              </div>
              <p className="body-medium">Dealers & Distributors</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                92%
              </div>
              <p className="body-medium">Client Retention</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                8+
              </div>
              <p className="body-medium">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="heading-2 mb-4">See How It Works for Your Industry</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Book a demo and we'll show you how other companies in your industry are using Smart Loyalty
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

export default Industries;
