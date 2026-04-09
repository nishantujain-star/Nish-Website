import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Award, Gift, Target, BarChart3 } from 'lucide-react';
import { programsDetailed } from '../mockData';

const Programs = () => {
  const getIcon = (id) => {
    const icons = {
      1: Award,
      2: Gift,
      3: Target,
      4: BarChart3
    };
    const IconComponent = icons[id] || Award;
    return <IconComponent size={40} style={{ color: 'var(--accent-text)' }} />;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section min-h-[60vh]">
        <div className="container mx-auto max-w-4xl">
          <h1 className="heading-1 mb-6">One Platform. Everything You Need.</h1>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Set targets. Track orders. Reward dealers. Launch campaigns. See ROI—all from one dashboard.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {programsDetailed.map((program, index) => (
              <div
                key={program.id}
                className="product-card"
                style={{ cursor: 'default' }}
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Icon & Title */}
                  <div className="md:col-span-4">
                    <div className="mb-4">{getIcon(program.id)}</div>
                    <h2 className="heading-2 mb-4 text-2xl">{program.title}</h2>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {program.description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="md:col-span-8">
                    <h3 className="heading-3 text-lg mb-6">Key Capabilities</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {program.capabilities.map((capability, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-lg"
                          style={{ background: 'var(--bg-section)' }}
                        >
                          <CheckCircle2
                            size={20}
                            style={{ color: 'var(--accent-text)', flexShrink: 0, marginTop: '2px' }}
                          />
                          <span className="body-small">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="section-padding" style={{ background: 'var(--bg-section)' }}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Companies Choose Smart Loyalty</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Simple to use. Built for India. Actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-wash)' }}>
                <Award size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">Easy to Use</h3>
              <p className="body-small">
                Your dealers don't need training. They sign up in 2 minutes and start earning rewards immediately.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-wash)' }}>
                <Target size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">Works for Your Business</h3>
              <p className="body-small">
                Customize targets, rewards, and rules. Launch a program in one week, not three months.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-wash)' }}>
                <BarChart3 size={32} style={{ color: 'var(--accent-text)' }} />
              </div>
              <h3 className="heading-3 text-lg mb-3">See Real Results</h3>
              <p className="body-small">
                Track sales increase, dealer participation, and program ROI from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="heading-2 mb-4">See the Platform in Action</h2>
          <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Book a demo and we'll walk you through exactly how it works for your business
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

export default Programs;
