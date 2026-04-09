import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Store, Network, Trophy, CheckCircle2 } from 'lucide-react';
import {
  heroData,
  problemSolution,
  solutionsOverview,
  industriesServed,
  testimonials
} from '../mockData';

const Home = () => {
  const getIcon = (iconName) => {
    const icons = {
      store: Store,
      network: Network,
      trophy: Trophy
    };
    const IconComponent = icons[iconName] || Store;
    return <IconComponent size={36} className="icon-accent" />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto max-w-4xl">
          <div className="badge">Trusted by 450+ Indian Manufacturers</div>
          <h1 className="heading-1 mb-3">
            Get Your Dealers to <span className="text-highlight">Sell More.</span> Consistently.
          </h1>
          <p className="body-large mb-5 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Set monthly targets. Track dealer orders in real-time. Reward top performers automatically. Built for Indian companies managing 50+ dealer networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/contact" className="btn-primary">
              {heroData.ctaPrimary}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/solutions" className="btn-secondary">
              {heroData.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="section-padding" style={{ background: 'var(--bg-page)' }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-10 rounded-2xl" style={{ background: 'var(--bg-section)', border: '1px solid var(--border-light)' }}>
              <h2 className="heading-3 mb-4">{problemSolution.problem.title}</h2>
              <p className="body-medium">{problemSolution.problem.description}</p>
            </div>
            <div
              className="p-10 rounded-2xl"
              style={{ background: 'var(--accent-wash)', border: '2px solid var(--accent-primary)' }}
            >
              <h2 className="heading-3 mb-4">{problemSolution.solution.title}</h2>
              <p className="body-medium">{problemSolution.solution.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Built for Indian B2B Companies</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Works for dealer networks across India—from Mumbai to Ludhiana
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutionsOverview.map((solution) => (
              <div key={solution.id} className="product-card">
                <div className="mb-4">{getIcon(solution.icon)}</div>
                <h3 className="heading-3 mb-3 text-xl">{solution.title}</h3>
                <p className="body-medium mb-4">{solution.description}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: 'var(--brand-yellow)' }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Works Across Industries</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From automotive to FMCG—companies use Smart Loyalty to increase dealer sales
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industriesServed.map((industry) => (
              <div
                key={industry.id}
                className="p-6 rounded-lg border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border-light)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 className="heading-3 text-lg mb-2">{industry.name}</h3>
                <p className="body-small">{industry.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries" className="btn-secondary">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Real feedback from companies using Smart Loyalty
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-lg"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <p className="body-medium mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {testimonial.author}
                  </p>
                  <p className="body-small">{testimonial.company}</p>
                  <p className="caption text-xs mt-1">{testimonial.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div
            className="max-w-3xl mx-auto p-12 rounded-2xl"
            style={{ background: 'var(--accent-wash)', border: '2px solid var(--accent-primary)' }}
          >
            <h2 className="heading-2 mb-4">Want to Increase Dealer Sales?</h2>
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              See how Smart Loyalty works. Book a 30-minute demo—no commitment required.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8">
              Book a Free Demo
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
