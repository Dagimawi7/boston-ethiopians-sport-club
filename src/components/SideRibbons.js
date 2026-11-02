import React from 'react';
import './SideRibbons.css';

const RibbonSVG = () => (
  <svg viewBox="0 0 160 1000" preserveAspectRatio="none" className="ribbon-svg">
    {/* 🟢 Green: from the screen edge to the first wave line */}
    <path
      d="M 0 -40 L 55 -40
         C 55 145, 12 145, 12 330
         C 12 515, 50 515, 50 700
         C 50 870, 20 870, 20 1040
         L 0 1040 Z"
      fill="#078A3A"
    />

    {/* 🟡 Yellow: tapers between the green wave and the red wave */}
    <path
      d="M 55 -40
         C 55 145, 12 145, 12 330
         C 12 515, 50 515, 50 700
         C 50 870, 20 870, 20 1040
         L 34 1040
         C 34 870, 72 870, 72 700
         C 72 515, 22 515, 22 330
         C 22 145, 85 145, 85 -40 Z"
      fill="#F7D116"
    />

    {/* 🔴 Red: innermost stripe, tapers the same way */}
    <path
      d="M 85 -40
         C 85 145, 22 145, 22 330
         C 22 515, 72 515, 72 700
         C 72 870, 34 870, 34 1040
         L 48 1040
         C 48 870, 94 870, 94 700
         C 94 515, 32 515, 32 330
         C 32 145, 115 145, 115 -40 Z"
      fill="#D71920"
    />
  </svg>
);

const SideRibbons = () => (
  <div className="side-ribbons-wrapper" aria-hidden="true">
    <div className="ribbon ribbon-left"><RibbonSVG /></div>
    <div className="ribbon ribbon-right"><RibbonSVG /></div>
  </div>
);

export default SideRibbons;