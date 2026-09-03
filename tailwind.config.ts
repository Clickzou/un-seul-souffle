import type { Config } from "tailwindcss";

/**
 * Palette Un Seul Souffle — dérivée de l'identité existante du site
 * (navy profond, teal, ambre, fond crème). Thème clair unique et assumé :
 * le site ne propose pas de mode sombre.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#faf8f4",
        surface: "#ffffff",
        "surface-2": "#f1eee7",
        ink: "#101a2c",
        body: "#4b5566",
        muted: "#7c8494",
        rule: "#e2ded4",
        "rule-2": "#ece8df",
        teal: {
          DEFAULT: "#0f6b66",
          dark: "#0b524e",
          wash: "#e8f1ef",
        },
        amber: {
          DEFAULT: "#b5721f",
          wash: "#f7ecdb",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      maxWidth: {
        shell: "1140px",
        prose: "66ch",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(16,26,44,.04), 0 8px 24px -12px rgba(16,26,44,.10)",
      },
    },
  },
  plugins: [],
};

export default config;
