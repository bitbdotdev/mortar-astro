const spacing = require("./src/styles/tailwind/presets/spacing.cjs").theme,
  fontSize = require("./src/styles/tailwind/presets/font-size.cjs").theme,
  borderRadius =
    require("./src/styles/tailwind/presets/border-radius.cjs").theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [
    require("./src/styles/tailwind/presets/colors.cjs"),
    require("./src/styles/tailwind/presets/typography.cjs"),
  ],
  theme: {
    ...spacing,
    ...borderRadius,
    ...fontSize,
    extend: {
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          '"Noto Sans"',
          "Roboto",
          '"Helvetica Neue"',
          "system-ui",
          "sans-serif",
        ],
        serif: ['"Source Serif 4"', '"Times New Roman"', "serif", "ui-serif"],
        mono: [
          '"Fira Code"',
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "ui-monospace",
          "monospace",
        ],
        heading: ['"Bricolage Grotesque"', "Inter", "sans-serif", "system-ui"],
      },
      fontWeight: {
        nexamedium: "540",
      },
    },
  },
  plugins: [],
};
