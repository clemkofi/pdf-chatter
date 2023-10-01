module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {}, // Tailwind CSS comes after CSS nesting
    autoprefixer: {},
  },
};
