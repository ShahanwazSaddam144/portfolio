import React from "react";

const BgAnimations = () => {
  return (
    <>
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.08); }
          66% { transform: translate(-30px, 40px) scale(0.94); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-50px, 30px) scale(1.05); }
          70% { transform: translate(35px, -45px) scale(0.96); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, 50px) scale(1.1); }
        }
        @keyframes driftLine1 {
          0% { stroke-dashoffset: 0; opacity: 0.18; }
          50% { opacity: 0.38; }
          100% { stroke-dashoffset: -320; opacity: 0.18; }
        }
        @keyframes driftLine2 {
          0% { stroke-dashoffset: 0; opacity: 0.1; }
          50% { opacity: 0.28; }
          100% { stroke-dashoffset: 280; opacity: 0.1; }
        }
        @keyframes driftLine3 {
          0% { stroke-dashoffset: -100; opacity: 0.12; }
          50% { opacity: 0.3; }
          100% { stroke-dashoffset: 220; opacity: 0.12; }
        }
        @keyframes pulseNode {
          0%, 100% { r: 2.5; opacity: 0.5; }
          50% { r: 4; opacity: 1; }
        }
        @keyframes pulseNodeSlow {
          0%, 100% { r: 1.8; opacity: 0.35; }
          50% { r: 3.2; opacity: 0.85; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes shimmerRing {
          0%, 100% { stroke-dashoffset: 0; opacity: 0.12; }
          50% { stroke-dashoffset: -160; opacity: 0.28; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.06; }
          50% { transform: translateY(-22px) rotate(8deg); opacity: 0.14; }
        }
        @keyframes hexFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.05; }
          50% { transform: translateY(18px) rotate(-6deg); opacity: 0.12; }
        }
        @keyframes particleDrift {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        @keyframes particleDrift2 {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(-90px) translateX(-20px); opacity: 0; }
        }
        @keyframes waveX {
          0%, 100% { d: path("M0,80 C160,40 320,120 480,80 C640,40 800,100 960,80"); }
          50% { d: path("M0,100 C160,60 320,140 480,100 C640,60 800,120 960,100"); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.75; }
        }
        @keyframes cornerTrace {
          0% { stroke-dashoffset: 200; opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="orb3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          <ellipse
            cx="280"
            cy="220"
            rx="380"
            ry="340"
            fill="url(#orb1)"
            style={{ animation: "floatOrb1 18s ease-in-out infinite" }}
          />
          <ellipse
            cx="1180"
            cy="680"
            rx="420"
            ry="360"
            fill="url(#orb2)"
            style={{ animation: "floatOrb2 22s ease-in-out infinite" }}
          />
          <ellipse
            cx="900"
            cy="150"
            rx="300"
            ry="260"
            fill="url(#orb3)"
            style={{ animation: "floatOrb3 26s ease-in-out infinite" }}
          />
          <ellipse
            cx="720"
            cy="450"
            rx="500"
            ry="400"
            fill="url(#centerGlow)"
          />

          {[
            { x1: 0, y1: 180, x2: 1440, y2: 340, dur: "12s", delay: "0s", anim: "driftLine1" },
            { x1: 0, y1: 420, x2: 1440, y2: 280, dur: "16s", delay: "2s", anim: "driftLine2" },
            { x1: 0, y1: 650, x2: 1440, y2: 520, dur: "20s", delay: "4s", anim: "driftLine3" },
            { x1: 0, y1: 750, x2: 1440, y2: 820, dur: "14s", delay: "1s", anim: "driftLine1" },
          ].map((l, i) => (
            <line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="#22d3ee"
              strokeWidth="0.5"
              strokeDasharray="80 180"
              style={{ animation: `${l.anim} ${l.dur} linear infinite`, animationDelay: l.delay }}
            />
          ))}

          <path
            d="M0,80 C240,30 480,140 720,80 C960,20 1200,110 1440,70"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.6"
            strokeDasharray="12 28"
            style={{ animation: "driftLine2 24s linear infinite" }}
          />
          <path
            d="M0,820 C240,860 480,780 720,830 C960,870 1200,790 1440,840"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
            strokeDasharray="10 30"
            style={{ animation: "driftLine3 28s linear infinite" }}
          />

          {[
            { cx: 180, cy: 310, dur: "3.2s", delay: "0s" },
            { cx: 480, cy: 140, dur: "4s", delay: "0.8s" },
            { cx: 760, cy: 390, dur: "3.6s", delay: "1.4s" },
            { cx: 1050, cy: 220, dur: "4.4s", delay: "0.3s" },
            { cx: 1320, cy: 480, dur: "3s", delay: "2s" },
            { cx: 340, cy: 620, dur: "5s", delay: "1.1s" },
            { cx: 920, cy: 700, dur: "3.8s", delay: "0.6s" },
            { cx: 1240, cy: 750, dur: "4.2s", delay: "1.7s" },
            { cx: 620, cy: 820, dur: "3.4s", delay: "2.4s" },
            { cx: 80, cy: 760, dur: "4.6s", delay: "0.9s" },
          ].map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="2.5"
              fill="#22d3ee"
              style={{
                animation: `pulseNode ${n.dur} ease-in-out infinite`,
                animationDelay: n.delay,
              }}
            />
          ))}

          {[
            { cx: 560, cy: 260, dur: "6s", delay: "1.5s" },
            { cx: 1100, cy: 550, dur: "7s", delay: "0.4s" },
            { cx: 280, cy: 480, dur: "5.5s", delay: "2.2s" },
            { cx: 820, cy: 780, dur: "6.5s", delay: "0.7s" },
          ].map((n, i) => (
            <circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="1.8"
              fill="#818cf8"
              style={{
                animation: `pulseNodeSlow ${n.dur} ease-in-out infinite`,
                animationDelay: n.delay,
              }}
            />
          ))}

          <g style={{ transformOrigin: "720px 450px", animation: "rotateSlow 60s linear infinite" }}>
            <circle
              cx="720" cy="450" r="280"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="0.4"
              strokeDasharray="6 24"
              opacity="0.15"
            />
          </g>
          <g style={{ transformOrigin: "720px 450px", animation: "rotateReverse 90s linear infinite" }}>
            <circle
              cx="720" cy="450" r="420"
              fill="none"
              stroke="#6366f1"
              strokeWidth="0.3"
              strokeDasharray="4 30"
              opacity="0.1"
            />
          </g>

          <circle
            cx="720" cy="450" r="160"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="0.5"
            strokeDasharray="20 140"
            style={{ animation: "shimmerRing 8s ease-in-out infinite" }}
          />

          {[
            { x: 120, y: 80, size: 40, dur: "14s", delay: "0s" },
            { x: 980, y: 60, size: 32, dur: "18s", delay: "3s" },
            { x: 1360, y: 200, size: 44, dur: "16s", delay: "1.5s" },
            { x: 60, y: 600, size: 28, dur: "20s", delay: "2s" },
            { x: 1380, y: 720, size: 36, dur: "12s", delay: "4s" },
          ].map((h, i) => {
            const s = h.size;
            const cx = h.x + s;
            const cy = h.y + s * 0.866;
            const pts = [
              [cx, h.y],
              [cx + s * 0.866, h.y + s * 0.5],
              [cx + s * 0.866, h.y + s * 1.5],
              [cx, h.y + s * 2],
              [cx - s * 0.866, h.y + s * 1.5],
              [cx - s * 0.866, h.y + s * 0.5],
            ].map(p => p.join(",")).join(" ");
            return (
              <polygon
                key={i}
                points={pts}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="0.6"
                style={{
                  animation: `${i % 2 === 0 ? "hexFloat" : "hexFloat2"} ${h.dur} ease-in-out infinite`,
                  animationDelay: h.delay,
                }}
              />
            );
          })}

          {[
            { cx: 400, cy: 500, dur: "8s", delay: "0s" },
            { cx: 900, cy: 300, dur: "11s", delay: "1s" },
            { cx: 1150, cy: 650, dur: "9s", delay: "2s" },
            { cx: 200, cy: 200, dur: "13s", delay: "0.5s" },
          ].map((p, i) => (
            <g key={i}>
              <circle
                cx={p.cx} cy={p.cy} r="1.2"
                fill="#67e8f9"
                style={{
                  animation: `twinkle ${p.dur} ease-in-out infinite`,
                  animationDelay: p.delay,
                }}
              />
              <circle
                cx={p.cx} cy={p.cy} r="1.2"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="3"
                strokeOpacity="0.15"
                style={{
                  animation: `twinkle ${p.dur} ease-in-out infinite`,
                  animationDelay: p.delay,
                }}
              />
            </g>
          ))}

          {[
            { x1: 180, y1: 310, x2: 480, y2: 140 },
            { x1: 480, y1: 140, x2: 760, y2: 390 },
            { x1: 760, y1: 390, x2: 1050, y2: 220 },
            { x1: 340, y1: 620, x2: 620, y2: 820 },
            { x1: 920, y1: 700, x2: 1240, y2: 750 },
          ].map((e, i) => (
            <line
              key={i}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              stroke="#22d3ee"
              strokeWidth="0.4"
              strokeOpacity="0.12"
              strokeDasharray="4 12"
            />
          ))}

          <rect
            x="40" y="40" width="120" height="80" rx="4"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="0.8"
            strokeDasharray="200"
            strokeDashoffset="200"
            opacity="0"
            style={{ animation: "cornerTrace 6s ease-in-out infinite", animationDelay: "1s" }}
          />
          <rect
            x="1280" y="780" width="120" height="80" rx="4"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.8"
            strokeDasharray="200"
            strokeDashoffset="200"
            opacity="0"
            style={{ animation: "cornerTrace 7s ease-in-out infinite", animationDelay: "3s" }}
          />

          <line
            x1="0" y1="450" x2="1440" y2="450"
            stroke="#22d3ee"
            strokeWidth="0.3"
            strokeOpacity="0.05"
            strokeDasharray="1 80"
          />
          <line
            x1="720" y1="0" x2="720" y2="900"
            stroke="#22d3ee"
            strokeWidth="0.3"
            strokeOpacity="0.05"
            strokeDasharray="1 60"
          />
        </svg>
      </div>
    </>
  );
};

export default BgAnimations;
