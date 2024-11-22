/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colors are close but not 100% correct -- would replace these with actual values
        blue: {
          50: "#EEF2FC",
          100: "#DDE6F8",
          200: "#BBCCF1",
          300: "#99B3EA",
          400: "#779AE4",
          500: "#5580DD",
          600: "#3568D6",
          700: "#224BA5",
          800: "#16326E",
          900: "#0B1937",
          950: "#060E1E",
        },
        yellow: {
          50: "#FAF4EB",
          100: "#F4E9D7",
          200: "#EBD6B2",
          300: "#E0C18A",
          400: "#D6AB63",
          500: "#CB9639",
          600: "#A6792B",
          700: "#7D5B21",
          800: "#513B15",
          900: "#281D0B",
          950: "#140F05",
        },
        orange: {
          50: "#FEF3EB",
          100: "#FDE7D8",
          200: "#FCD0B1",
          300: "#FAB685",
          400: "#F89E5F",
          500: "#F67E28",
          600: "#DC610A",
          700: "#A64907",
          800: "#6B3005",
          900: "#361802",
          950: "#1D0D01",
        },
      },
    },
  },
  plugins: [],
};
