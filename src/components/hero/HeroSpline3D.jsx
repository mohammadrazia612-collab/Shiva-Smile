import React, { lazy, Suspense, useEffect, useState } from 'react';

// Lazy-load Spline React component so bundle stays ultra-light when no scene is loaded
const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * HeroSpline3D Layer (z-index: 3)
 * Dedicated, fully isolated Spline 3D container conforming to the spline-3d-integration skill.
 * 
 * - When `sceneUrl` is null/undefined/empty:
 *   - Renders null: zero layout shift, zero empty containers, zero asset loading.
 * - When `sceneUrl` is provided (.splinecode or iframe URL):
 *   - Renders native `@splinetool/react-spline` canvas for .splinecode scenes with full WebGL interactivity.
 *   - Or renders isolated iframe embed for cloud preview links.
 */
export default function HeroSpline3D({ 
  sceneUrl = null, 
  onLoad = () => {},
  position = 'center-right' // 'center', 'center-right', 'background-full'
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null immediately if no scene URL is configured
  if (!sceneUrl || !isMounted) {
    return null;
  }

  const isSplineCode = sceneUrl.endsWith('.splinecode');

  return (
    <div 
      className={`hero-layer hero-spline-layer hero-spline-pos-${position}`} 
      aria-hidden="true"
    >
      <div className="hero-spline-container">
        {isSplineCode ? (
          <Suspense fallback={<div className="spline-placeholder-loader" />}>
            <Spline 
              scene={sceneUrl} 
              onLoad={onLoad} 
              className="hero-spline-canvas"
            />
          </Suspense>
        ) : (
          <iframe
            src={sceneUrl}
            title="Spline 3D Scene"
            frameBorder="0"
            className="hero-spline-frame"
            onLoad={onLoad}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
