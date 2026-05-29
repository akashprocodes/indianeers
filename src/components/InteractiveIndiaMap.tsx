"use client";

import React, { useState } from "react";
import IndiaMap from "react-svgmap-india";
import { motion } from "framer-motion";

const ACTIVE_STATES = [
  { id: "RJ", label: "Rajasthan", top: "36%", left: "30%" },
  { id: "UP", label: "Uttar Pradesh", top: "38%", left: "48%" },
  { id: "MH", label: "Maharashtra", top: "58%", left: "28%" },
  { id: "KA", label: "Karnataka", top: "74%", left: "32%" },
  { id: "MP", label: "Madhya Pradesh", top: "48%", left: "42%" },
  { id: "GJ", label: "Gujarat", top: "48%", left: "18%" },
  { id: "TN", label: "Tamil Nadu", top: "86%", left: "38%" },
  { id: "WB", label: "West Bengal", top: "50%", left: "75%" },
  { id: "BR", label: "Bihar", top: "40%", left: "68%" },
  { id: "AP", label: "Andhra Pradesh", top: "70%", left: "43%" },
  { id: "TG", label: "Telangana", top: "62%", left: "40%" }, // Correct ID for Telangana is usually TG or TS, wait, react-svgmap-india uses TG
  { id: "OR", label: "Odisha", top: "55%", left: "64%" },
  { id: "DL", label: "Delhi", top: "26%", left: "38%" },
  { id: "PB", label: "Punjab", top: "20%", left: "31%" },
  { id: "HR", label: "Haryana", top: "24%", left: "35%" },
];

export function InteractiveIndiaMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as SVGElement;
    if (target && target.tagName.toLowerCase() === "path" && target.id) {
      const stateObj = ACTIVE_STATES.find(s => s.id === target.id || s.label.toLowerCase() === target.id.toLowerCase());
      if (stateObj) {
        setHoveredState(stateObj.label);
      } else {
        setHoveredState(null);
      }
    }
  };

  return (
    <div 
      className="relative w-full max-w-lg mx-auto flex items-center justify-center py-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredState(null)}
    >
      
      {/* Soft Glow Behind Map */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent blur-3xl rounded-full scale-110 opacity-60 pointer-events-none" />

      {/* The Map Component */}
      <div className="relative z-10 w-full drop-shadow-xl opacity-95">
        <IndiaMap
          onClick={(state: string) => console.log("Clicked:", state)}
          size="100%"
          mapColor="#E0F2FE" // Light sky blue
          strokeColor="#7DD3FC" // Darker sky blue borders
          strokeWidth="1.2"
          hoverColor="#FED7AA" // Light orange hover
        />
      </div>

      {/* Floating Pins for Active States */}
      {ACTIVE_STATES.map((state, i) => (
        <motion.div
          key={state.id}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`absolute z-20 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none ${hoveredState === state.label ? 'scale-125 -translate-y-2' : ''}`}
          style={{ top: state.top, left: state.left, transform: hoveredState === state.label ? "translate(-50%, -100%) scale(1.25)" : "translate(-50%, -100%)" }}
        >
          {/* Standard Red Map Pin (Location Icon) */}
          <div className="relative text-red-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="0.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          
          {/* Clean Light Theme Tooltip */}
          {hoveredState === state.label && (
            <div className="absolute bottom-full mb-2 bg-white backdrop-blur-md text-slate-800 px-4 py-2 rounded-xl border border-slate-200 shadow-[0_10px_25px_rgba(0,0,0,0.05)] whitespace-nowrap z-50 animate-in fade-in zoom-in-90 duration-200">
              <div className="font-display font-bold text-blue-700 text-[14px] tracking-wide mb-0.5 drop-shadow-sm">{state.label}</div>
              <div className="flex items-center gap-1.5 text-slate-600 text-[12px] font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Centers: <span className="text-slate-900 font-bold">{Math.floor(Math.random() * 20) + 5}</span>
              </div>
              
              {/* Tooltip Pointer */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
