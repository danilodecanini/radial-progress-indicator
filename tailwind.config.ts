import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(var(--blue) / <alpha-value>)",
        green: "hsl(var(--green) / <alpha-value>)",
        purple: "hsl(var(--purple) / <alpha-value>)",
        orange: "hsl(var(--orange) / <alpha-value>)",
        yellow: "hsl(var(--yellow) / <alpha-value>)",
      },
    },
  },
} satisfies Config;
