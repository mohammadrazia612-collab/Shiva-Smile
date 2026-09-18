import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

/**
 * HeroCTA Layer (z-index: 6)
 * High-priority action buttons and subtle interactive scroll indicator.
 */
export default function HeroCTA({ isLoaded = false, onOpenAppointment }) {
  const handleScrollToTreatments = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#treatments');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const elem = document.querySelector('#statistics');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`hero-cta-group ${isLoaded ? 'is-visible' : ''}`}>
      <div className="hero-buttons">
        <button
          type="button"
          className="btn btn-primary hero-btn-main"
          onClick={onOpenAppointment}
        >
          <span>Book an Appointment</span>
          <ArrowUpRight size={17} />
        </button>

        <a
          href="#treatments"
          className="btn btn-secondary hero-btn-secondary"
          onClick={handleScrollToTreatments}
        >
          <span>Explore Treatments</span>
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hero-scroll-indicator" onClick={handleScrollDown} role="button" tabIndex={0} aria-label="Scroll down">
        <span className="scroll-indicator-text">Scroll to explore</span>
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel" />
        </div>
      </div>
    </div>
  );
}
