import React from 'react';

/**
 * HeroContent Layer (z-index: 5)
 * Apple-style typography hierarchy with sequential entrance transitions:
 * Eyebrow -> Main Headline -> Supporting Description.
 */
export default function HeroContent({ isLoaded = false }) {
  return (
    <div className="hero-content-block">
      {/* Eyebrow */}
      <div className={`hero-eyebrow-wrapper ${isLoaded ? 'is-visible' : ''}`}>
        <span className="eyebrow hero-eyebrow">ADVANCED DENTAL CARE</span>
      </div>

      {/* Headline */}
      <h1 className={`hero-title ${isLoaded ? 'is-visible' : ''}`}>
        A NEW STANDARD<br />
        <span className="hero-title-accent">FOR YOUR SMILE.</span>
      </h1>

      {/* Supporting Text */}
      <p className={`hero-description ${isLoaded ? 'is-visible' : ''}`}>
        Modern dentistry, advanced technology, and personalized care designed around you.
      </p>
    </div>
  );
}
