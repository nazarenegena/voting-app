/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DF5173",
        muted: "#75565c",
        faded: "#FFE7ED",
        dull: "#272626",
        neutral: "#E3DEDE",
        lightPurple: "#F7F3FC",
        darkPurple: "#8C4ECB",
        lightYellow: "#FDF9F1",
        mellowYellow: "#E9C569",
        lightPink: "#FDF2F4",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
