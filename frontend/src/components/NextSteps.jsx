import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const NextSteps = () => {
  const steps = [
    "We'll reach out within 24 hours",
    "Schedule a personalized demo",
    "Discuss your specific requirements",
    "Get a customized solution proposal"
  ];

  return (
    <div
      className="p-8 rounded-xl"
      style={{
        background: 'var(--bg-warm)',
        border: '1px solid var(--accent-primary)'
      }}
    >
      <h3 className="heading-3 mb-6">What happens next?</h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={`step-${index}`} className="flex items-start gap-3">
            <CheckCircle2
              size={24}
              style={{ 
                color: 'var(--accent-text)', 
                flexShrink: 0, 
                marginTop: '2px' 
              }}
            />
            <p className="body-medium">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
