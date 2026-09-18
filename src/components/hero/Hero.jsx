import React, { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';
import HeroMedia from './HeroMedia';
import HeroSpline3D from './HeroSpline3D';
import HeroEffects from './HeroEffects';
import HeroContent from './HeroContent';
import HeroCTA from './HeroCTA';
import './Hero.css';

/**
 * Master Hero Component
 * Orchestrates 6 independent layers:
 * 1. HeroBackground
 * 2. HeroMedia
 * 3. HeroSpline3D (future-ready, zero footprint when null)
 * 4. HeroEffects
 * 5. HeroContent
 * 6. HeroCTA
 */
export default function Hero({ onOpenAppointment, splineSceneUrl = null }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Staggered sequential entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section" id="hero" aria-label="Hero Introduction">
      {/* 1. Background Layer (z-index: 1) */}
      <HeroBackground />

      {/* 2. Media Layer (z-index: 2) */}
      <HeroMedia scrollProgress={scrollProgress} />

      {/* 3. Future Spline 3D Layer (z-index: 3) */}
      <HeroSpline3D sceneUrl={splineSceneUrl} />

      {/* 4. Visual Effects Layer (z-index: 4) */}
      <HeroEffects mousePos={mousePos} />

      {/* 5 & 6. Content & CTA Presentation Area (z-index: 5 & 6) */}
      <div className="container hero-container">
        <div className="hero-content-wrapper">
          <HeroContent isLoaded={isLoaded} />
          <HeroCTA isLoaded={isLoaded} onOpenAppointment={onOpenAppointment} />
        </div>
      </div>
    </section>
  );
}
