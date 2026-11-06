/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0A0A0B",
          darker: "#050507",
          card: "#111114",
          cardHover: "#16161B",
          cardBorder: "rgba(255, 59, 48, 0.25)",
          cardBorderHover: "rgba(255, 59, 48, 0.55)",
          red: "#FF3B30",
          redGlow: "rgba(255, 59, 48, 0.35)",
          redMuted: "rgba(255, 59, 48, 0.12)",
          redDeep: "#7F1D1D",
          cyan: "#38BDF8",
          cyanGlow: "rgba(56, 189, 248, 0.3)",
          text: "#F4F4F5",
          muted: "#A1A1AA",
          dim: "#52525B",
          darkBorder: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Space Grotesk", "Sora", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
        handwritten: ["Caveat", "cursive"],
      },
      boxShadow: {
        "cyber-red": "0 0 25px -5px rgba(255, 59, 48, 0.35)",
        "cyber-red-lg": "0 0 45px -5px rgba(255, 59, 48, 0.5)",
        "cyber-card": "0 8px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        "cyber-glow": "0 0 15px rgba(255, 59, 48, 0.25)",
        "cyan-glow": "0 0 15px rgba(56, 189, 248, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "cursor-blink": "blink 1s step-start infinite",
        "scanline": "scanline 10s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

