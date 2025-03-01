/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#f06292", // Pink color
          foreground: "#ffffff" // White for contrast
        },
        secondary: {
          DEFAULT: "#ec407a", // Lighter pink shade
          foreground: "#ffffff"
        },
        destructive: {
          DEFAULT: "#d81b60", // Deep vibrant pink
          foreground: "#ffffff"
        },
        muted: {
          DEFAULT: "#f8bbd0", // Light pink
          foreground: "#f06292"
        },
        accent: {
          DEFAULT: "#f48fb1", // Soft pink accent
          foreground: "#d81b60"
        },
        popover: {
          DEFAULT: "#fce4ec", // Very light pink
          foreground: "#d81b60"
        },
        card: {
          DEFAULT: "#f1f8e9", // Light soft tone for card
          foreground: "#c2185b"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens")
  ]
};
