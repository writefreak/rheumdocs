import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          alt: "var(--color-bg-alt)",
        },
        ink: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 69, 72, 0.12)",
        card: "0 4px 24px rgba(42, 46, 44, 0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
