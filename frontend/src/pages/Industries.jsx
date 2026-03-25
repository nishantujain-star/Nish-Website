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
      description: 'Drive dealer performance and service excellence',
      details:
        'Engage your dealer network with loyalty programs that boost vehicle sales, parts purchases, and service revenue. Track dealer performance and reward top performers.',
      icon: Car,
      useCases: ['Dealer incentive schemes', 'Service center programs', 'Spare parts loyalty']
    },
    {
      id: 2,
      name: 'Consumer Electronics',
      description: 'Boost retail sales and product launches',
      details:
        'Motivate retailers to push your products through targeted incentives and promotional campaigns. Perfect for new product launches and seasonal sales drives.',
      icon: Smartphone,
      useCases: ['Retailer loyalty programs', 'Product launch campaigns', 'Demo & display incentives']
    },
    {
      id: 3,
      name: 'FMCG & Consumer Goods',
      description: 'Increase distributor reach and market penetration',
      details:
        'Build strong relationships with distributors, wholesalers, and retailers. Drive consistent offtake and market share growth through strategic incentives.',
      icon: ShoppingCart,
      useCases: ['Distributor loyalty', 'Volume-based incentives', 'Market expansion rewards']
    },
    {
      id: 4,
      name: 'Building Materials',
      description: 'Engage contractors and dealer networks',
      details:
        'Reach architects, contractors, and dealers who influence buying decisions. Track projects and reward specifications and purchases.',
      icon: Home,
      useCases: ['Contractor programs', 'Dealer loyalty', 'Architect engagement']
    },
    {
      id: 5,
      name: 'Pharmaceuticals',
      description: 'Enhance chemist and distributor loyalty',
      details:
        'Engage chemists, stockists, and distributors with compliant loyalty programs. Drive prescription tracking and inventory management.',
      icon: Pill,
      useCases: ['Chemist loyalty', 'Stockist programs', 'Medical rep incentives']
    },
    {
      id: 6,
      name: 'Financial Services',
      description: 'Incentivize agent networks and partners',
      details:
        'Motivate insurance agents, loan DSAs, and banking correspondents with performance-based rewards. Track lead generation and conversion.',
      icon: Wallet,
      useCases: ['Agent incentive programs', 'DSA rewards', 'Partner engagement']
    },
    {
      id: 7,
      name: 'Manufacturing & Industrial',
      description: 'Strengthen B2B channel partnerships',
      details:
        'Engage industrial dealers, distributors, and OEM partners with customized B2B loyalty programs. Drive consistent orders and long-term partnerships.',
      icon: Factory,
      useCases: ['Industrial dealer programs', 'OEM partnerships', 'Volume incentives']
    },
    {
      id: 8,
      name: 'Technology & Software',
      description: 'Grow reseller and partner networks',
      details:
        'Motivate channel partners, resellers, and system integrators to sell and implement your solutions. Track certifications and project wins.',
      icon: Lightbulb,
      useCases: ['Reseller incentives', 'Certification rewards', 'Partner programs']
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
                          key={idx}
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
            <h2 className="heading-2 mb-4">Proven Track Record</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Trusted by leading brands across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                500+
              </div>
              <p className="body-medium">Active Programs</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                2M+
              </div>
              <p className="body-medium">Partner Network</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                95%
              </div>
              <p className="body-medium">Client Retention</p>
            </div>
            <div className="text-center">
              <div className="heading-1 text-4xl mb-2" style={{ color: 'var(--accent-text)' }}>
                10+
              </div>
              <p className="body-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="heading-2 mb-4">Your Industry, Our Expertise</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss how we can help solve your specific industry challenges
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8">
            Talk to an Expert
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
