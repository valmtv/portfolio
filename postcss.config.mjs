const config = {
  plugins: {
    "postcss-import": {
      path: ["src/app", "node_modules"],
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
