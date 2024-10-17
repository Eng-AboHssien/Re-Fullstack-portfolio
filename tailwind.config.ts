import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         "cyan-custom": "#00C0FD",
//         "pink-custom": "#E70FAA",
//       },
//     },
//   },
//   plugins: [],
// };
