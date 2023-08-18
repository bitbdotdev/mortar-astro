module.exports = ({ env }) => ({
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    ...(env === "production" ? { autoprefixer: {} } : {}),
    ...(env === "production" ? { cssnano: {} } : {}),
  },
});
