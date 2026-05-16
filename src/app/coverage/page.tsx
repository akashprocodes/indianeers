"use client";
import { motion } from "framer-motion";
import { MapPin, Building2, Users, Layers } from "lucide-react";

const activeStates = [
  { name: "Maharashtra", districts: 8, centers: 18, trainees: 1840, color: "#FF6B00" },
  { name: "Gujarat", districts: 5, centers: 12, trainees: 1120, color: "#FF6B00" },
  { name: "Rajasthan", districts: 6, centers: 14, trainees: 980, color: "#FF6B00" },
  { name: "Uttar Pradesh", districts: 10, centers: 20, trainees: 1640, color: "#FF6B00" },
  { name: "Bihar", districts: 4, centers: 8, trainees: 620, color: "#FF6B00" },
  { name: "Madhya Pradesh", districts: 5, centers: 11, trainees: 840, color: "#FF6B00" },
  { name: "Odisha", districts: 3, centers: 6, trainees: 480, color: "#FF6B00" },
  { name: "West Bengal", districts: 4, centers: 9, trainees: 720, color: "#FF6B00" },
  { name: "Tamil Nadu", districts: 3, centers: 7, trainees: 560, color: "#FF6B00" },
  { name: "Karnataka", districts: 3, centers: 7, trainees: 540, color: "#FF6B00" },
  { name: "Telangana", districts: 2, centers: 5, trainees: 380, color: "#FF6B00" },
  { name: "Andhra Pradesh", districts: 2, centers: 4, trainees: 320, color: "#FF6B00" },
  { name: "Haryana", districts: 2, centers: 4, trainees: 280, color: "#FF6B00" },
  { name: "Punjab", districts: 2, centers: 4, trainees: 240, color: "#FF6B00" },
  { name: "Delhi", districts: 1, centers: 3, trainees: 285, color: "#FF6B00" },
];

// Simplified India SVG path data for a schematic map
// Using circles to represent states on a grid layout
const statePositions: Record<string, { cx: number; cy: number }> = {
  "Jammu & Kashmir": { cx: 230, cy: 90 },
  Punjab: { cx: 205, cy: 160 },
  Haryana: { cx: 235, cy: 185 },
  Delhi: { cx: 255, cy: 205 },
  Rajasthan: { cx: 195, cy: 240 },
  "Uttar Pradesh": { cx: 305, cy: 220 },
  Bihar: { cx: 370, cy: 230 },
  "West Bengal": { cx: 420, cy: 270 },
  "Madhya Pradesh": { cx: 265, cy: 295 },
  Gujarat: { cx: 165, cy: 295 },
  Maharashtra: { cx: 225, cy: 360 },
  Odisha: { cx: 380, cy: 320 },
  Telangana: { cx: 280, cy: 415 },
  "Andhra Pradesh": { cx: 305, cy: 460 },
  Karnataka: { cx: 250, cy: 460 },
  "Tamil Nadu": { cx: 290, cy: 520 },
  Kerala: { cx: 245, cy: 530 },
};

export default function Coverage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_#FF6B00_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-primary font-mono text-sm mb-3 uppercase tracking-widest">Where We Operate</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Geographical Coverage
          </h1>
          <p className="text-white/60 text-lg mt-4 max-w-2xl">
            From the plains of UP to the coasts of Tamil Nadu — Skillionaires operates a pan-India network of
            Training Centers in 15 states and 45+ districts.
          </p>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active States", value: "15", icon: MapPin },
              { label: "Districts Covered", value: "45+", icon: Layers },
              { label: "Training Centers", value: "120+", icon: Building2 },
              { label: "Total Trainees", value: "10,247", icon: Users },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center" data-testid={`coverage-stat-${i}`}>
                  <div className="flex justify-center mb-2">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="font-mono text-3xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-secondary/60">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Schematic India Map */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Coverage Map</h2>
            <div className="bg-white rounded-3xl border border-border p-6 shadow-sm overflow-hidden">
              <svg viewBox="0 0 560 600" className="w-full h-auto" aria-label="India coverage map">
                {/* Background */}
                <rect width="560" height="600" fill="#F8F6F1" rx="12" />
                
                {/* Grid dots for texture */}
                {Array.from({ length: 30 }).map((_, row) =>
                  Array.from({ length: 28 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 20 + 10}
                      cy={row * 20 + 10}
                      r="1"
                      fill="#E5E3DC"
                    />
                  ))
                )}

                {/* Inactive state positions */}
                {Object.entries(statePositions).map(([state, pos]) => {
                  const isActive = activeStates.some((s) => s.name === state);
                  return (
                    <g key={state}>
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r={isActive ? 18 : 10}
                        fill={isActive ? "#FF6B00" : "#E5E3DC"}
                        opacity={isActive ? 1 : 0.5}
                      />
                      {isActive && (
                        <>
                          <circle cx={pos.cx} cy={pos.cy} r={24} fill="#FF6B00" opacity={0.15} />
                          <circle cx={pos.cx} cy={pos.cy} r={4} fill="white" />
                        </>
                      )}
                      <text
                        x={pos.cx}
                        y={pos.cy + (isActive ? 34 : 20)}
                        textAnchor="middle"
                        fontSize={isActive ? "9" : "7"}
                        fill={isActive ? "#0A1628" : "#9CA3AF"}
                        fontWeight={isActive ? "600" : "400"}
                        fontFamily="DM Sans, sans-serif"
                      >
                        {state.length > 12 ? state.split(" ")[0] : state}
                      </text>
                    </g>
                  );
                })}

                {/* Legend */}
                <g transform="translate(20, 550)">
                  <circle cx={8} cy={8} r={8} fill="#FF6B00" />
                  <text x={22} y={12} fontSize="10" fill="#0A1628" fontFamily="DM Sans, sans-serif">Active State</text>
                  <circle cx={90} cy={8} r={6} fill="#E5E3DC" />
                  <text x={102} y={12} fontSize="10" fill="#9CA3AF" fontFamily="DM Sans, sans-serif">Upcoming</text>
                </g>
              </svg>
            </div>
          </div>

          {/* State List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Active States</h2>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {activeStates.map((state, i) => (
                <motion.div
                  key={state.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white rounded-xl p-4 border border-border shadow-sm hover:border-primary/30 transition-colors"
                  data-testid={`state-card-${i}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="font-display font-bold text-secondary text-sm">{state.name}</span>
                    </div>
                    <span className="font-mono text-xs text-primary font-bold">
                      {state.trainees.toLocaleString()} trainees
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs text-secondary/50">
                    <span className="flex items-center gap-1">
                      <Layers size={10} /> {state.districts} districts
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 size={10} /> {state.centers} centers
                    </span>
                  </div>
                  {/* Mini progress bar */}
                  <div className="mt-2 h-1 bg-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(state.trainees / 1840) * 100}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Expansion Roadmap */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_50%,_#00C48C_0%,_transparent_60%)]" />
          <div className="relative z-10">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-3">Coming Soon</p>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Expansion Roadmap 2024–26</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { phase: "Phase 4 (2024)", states: ["Jharkhand", "Chhattisgarh", "Assam"], centers: "+18 Centers" },
                { phase: "Phase 5 (2025)", states: ["HP", "Uttarakhand", "Goa"], centers: "+12 Centers" },
                { phase: "Phase 6 (2026)", states: ["J&K", "NE States", "Andaman"], centers: "+15 Centers" },
              ].map((roadmap, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-5">
                  <div className="font-mono text-xs text-accent mb-2">{roadmap.phase}</div>
                  <div className="space-y-1 mb-3">
                    {roadmap.states.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin size={12} className="text-primary" />
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-primary">{roadmap.centers}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
