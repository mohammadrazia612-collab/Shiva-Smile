import React, { useState } from 'react';
import { clinicData } from '../../data/clinicData';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './FAQSection.css';

export default function FAQSection({ onOpenAppointment }) {
  const [openIndex, setOpenIndex] = useState(0); // first item opened by default

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section section-spacing" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="eyebrow">COMMON CLINICAL QUESTIONS</span>
          <h2 className="faq-title">Frequently Asked Questions.</h2>
          <p className="faq-subtitle">
            Everything you need to know about our digital procedures, comfort protocols, and concierge scheduling.
          </p>
        </div>

        <div className="faq-accordion-container">
          {clinicData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-trigger"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-accordion-panel"
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-footer-notice">
          <div className="notice-icon-box">
            <HelpCircle size={18} />
          </div>
          <div className="notice-text-col">
            <h4 className="notice-title">Have a specific question not covered here?</h4>
            <p className="notice-desc">Our patient concierge team is available to discuss clinical protocols and treatment timing.</p>
          </div>
          <button
            type="button"
            className="btn btn-secondary notice-btn"
            onClick={onOpenAppointment}
          >
            Speak to a Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
