import React from 'react';

/**
 * HeroBackground Layer (z-index: 1)
 * Pristine off-white/warm-white clinical background with subtle ambient gradient lighting.
 */
export default function HeroBackground() {
  return (
    <div className="hero-layer hero-background-layer" aria-hidden="true">
      <div className="hero-bg-gradient-top" />
      <div className="hero-bg-gradient-radial" />
      <div className="hero-bg-grid-subtle" />
    </div>
  );
}
