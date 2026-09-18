import React from 'react';

/**
 * HeroEffects Layer (z-index: 4)
 * Subtle ambient optical sheens, light refraction, and soft clinical glow.
 */
export default function HeroEffects({ mousePos = { x: 0, y: 0 } }) {
  // Subtle interactive light sheen following cursor gently
  const sheenStyle = {
    transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`
  };

  return (
    <div className="hero-layer hero-effects-layer" aria-hidden="true">
      <div className="hero-effect-glow" style={sheenStyle} />
      <div className="hero-effect-vignette" />
    </div>
  );
}
