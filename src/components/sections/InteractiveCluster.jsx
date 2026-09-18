import React, { useState, useRef, useEffect, useCallback } from 'react';
import { clinicData } from '../../data/clinicData';
import { Scan, ShieldCheck, Sparkles, Layers, Maximize2, ArrowRight, X } from 'lucide-react';
import './InteractiveCluster.css';

const iconMap = {
  Scan: Scan,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Layers: Layers,
  Maximize2: Maximize2
};

export default function InteractiveCluster({ onOpenAppointment }) {
  const [activeElement, setActiveElement] = useState(clinicData.clusterElements[0]);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const containerRef = useRef(null);
  
  // Real-time physics offsets for each node
  const [nodeTransforms, setNodeTransforms] = useState({});
  const mouseTargetRef = useRef({ x: 0, y: 0, isActive: false });
  const currentOffsetsRef = useRef({});

  // Animation physics loop for inertia & magnetic attraction
  useEffect(() => {
    // Initialize node offsets
    clinicData.clusterElements.forEach(item => {
      currentOffsetsRef.current[item.id] = { x: 0, y: 0, rot: 0, scale: 1 };
    });

    let animationFrameId;

    const animatePhysics = () => {
      const { x: targetX, y: targetY, isActive } = mouseTargetRef.current;
      const updated = {};

      clinicData.clusterElements.forEach((item, index) => {
        const prev = currentOffsetsRef.current[item.id] || { x: 0, y: 0, rot: 0, scale: 1 };
        
        // Multiplier varies per element for natural layered depth
        const depthWeight = (item.scale || 1.0) * (index % 2 === 0 ? 28 : 20);
        const rotFactor = (index % 2 === 0 ? 1 : -1) * 3.5;

        let destX = 0;
        let destY = 0;
        let destRot = 0;
        let destScale = 1;

        if (isActive) {
          destX = targetX * depthWeight;
          destY = targetY * depthWeight;
          destRot = targetX * rotFactor;

          // If this node or a nearby node is hovered
          if (hoveredNodeId === item.id) {
            destScale = 1.1;
            destX += targetX * 12; // Extra pull towards cursor
            destY += targetY * 12;
          } else if (hoveredNodeId) {
            // Subtle sympathetic reaction of neighboring objects
            destScale = 0.96;
            destX -= targetX * 6;
          }
        }

        // Smooth spring lerp interpolation
        const springSpeed = 0.08;
        const nextX = prev.x + (destX - prev.x) * springSpeed;
        const nextY = prev.y + (destY - prev.y) * springSpeed;
        const nextRot = prev.rot + (destRot - prev.rot) * springSpeed;
        const nextScale = prev.scale + (destScale - prev.scale) * springSpeed;

        currentOffsetsRef.current[item.id] = {
          x: nextX,
          y: nextY,
          rot: nextRot,
          scale: nextScale
        };

        updated[item.id] = {
          x: nextX.toFixed(2),
          y: nextY.toFixed(2),
          rot: nextRot.toFixed(2),
          scale: nextScale.toFixed(3)
        };
      });

      setNodeTransforms(updated);
      animationFrameId = requestAnimationFrame(animatePhysics);
    };

    animationFrameId = requestAnimationFrame(animatePhysics);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredNodeId]);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseTargetRef.current = { x, y, isActive: true };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseTargetRef.current = { x: 0, y: 0, isActive: false };
    setHoveredNodeId(null);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((touch.clientY - rect.top) / rect.height - 0.5) * 2;
    mouseTargetRef.current = { x, y, isActive: true };
  }, []);

  return (
    <section className="cluster-section section-spacing" id="cluster">
      <div className="container">
        {/* Header */}
        <div className="cluster-header">
          <span className="eyebrow">THE ARCHITECTURE OF A SMILE</span>
          <h2 className="cluster-title">Interactive Anatomy & Technology.</h2>
          <p className="cluster-subtitle">
            Explore the biological and technological components engineered into every bespoke treatment. Move your cursor to feel the interactive depth. Select any element to inspect clinical specifications.
          </p>
        </div>

        {/* Interactive Canvas */}
        <div 
          className="cluster-canvas-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseLeave}
        >
          {/* Depth Grid Pattern */}
          <div className="cluster-depth-grid" aria-hidden="true" />

          {/* Floating Physics Nodes */}
          <div className="cluster-nodes-layer">
            {clinicData.clusterElements.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              const isSelected = activeElement?.id === item.id;
              const transform = nodeTransforms[item.id] || { x: 0, y: 0, rot: 0, scale: 1 };

              return (
                <div
                  key={item.id}
                  className={`cluster-node node-${item.id} ${isSelected ? 'is-selected' : ''}`}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `translate(-50%, -50%) translate3d(${transform.x}px, ${transform.y}px, 0) rotate(${transform.rot}deg) scale(${transform.scale})`,
                    animationDelay: `${index * 0.45}s`
                  }}
                  onClick={() => setActiveElement(item)}
                  onMouseEnter={() => {
                    setHoveredNodeId(item.id);
                    setActiveElement(item);
                  }}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Inspect ${item.title}`}
                >
                  <div className="node-icon-bubble">
                    <IconComponent size={22} className="node-icon" />
                  </div>
                  <span className="node-pill-label">{item.title}</span>
                  <div className="node-pulse" />
                </div>
              );
            })}
          </div>

          {/* Apple-Style Integrated Floating Inspector Card */}
          {activeElement && (
            <div className="cluster-inspector-card" key={activeElement.id}>
              <div className="inspector-top">
                <span className="pill-badge">{activeElement.badge}</span>
                <button
                  type="button"
                  className="inspector-close-btn"
                  onClick={() => setActiveElement(null)}
                  aria-label="Dismiss inspector"
                >
                  <X size={16} />
                </button>
              </div>

              <h3 className="inspector-title">{activeElement.title}</h3>
              <p className="inspector-tagline">{activeElement.tagline}</p>
              <p className="inspector-description">{activeElement.description}</p>

              {/* Specs */}
              <div className="inspector-specs">
                {activeElement.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="inspector-spec-item">
                    <div className="spec-dot" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="inspector-action">
                <button
                  type="button"
                  className="btn btn-primary inspector-btn"
                  onClick={onOpenAppointment}
                >
                  <span>Consult on this technology</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
