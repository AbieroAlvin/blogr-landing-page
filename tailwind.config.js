/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Overpass"],
        secondary: ["Ubuntu"]
      },
      backgroundImage: {
        introBgMobile: "url(src/images/bg-pattern-intro-mobile.svg)",
        introBgDesktop: "url(src/images/bg-pattern-intro-desktop.svg)"
      }
    }
  },
  plugins: []
};
