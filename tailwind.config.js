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
        neutral: "#FAFAFB",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
