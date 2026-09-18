import React from 'react';

/**
 * HeroMedia Layer (z-index: 2)
 * Houses the high-end dental visual, seamlessly integrated into the off-white background
 * with subtle gradient feathering so it feels part of the entire canvas rather than a box.
 */
export default function HeroMedia({ scrollProgress = 0 }) {
  // Parallax subtle offset
  const parallaxTranslate = scrollProgress * 40;

  return (
    <div className="hero-layer hero-media-layer" aria-hidden="true">
      <div 
        className="hero-media-wrapper"
        style={{ transform: `translate3d(0, ${parallaxTranslate}px, 0)` }}
      >
        <img
          src="/images/hero_smile.jpg"
          alt="Shiva Smile Dental Care Hospital, Siddipet"
          className="hero-media-img"
          loading="eager"
          decoding="async"
        />
        {/* Soft edge masking and gradient integration */}
        <div className="hero-media-mask" />
      </div>
    </div>
  );
}
