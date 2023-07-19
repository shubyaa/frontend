/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#2E2F30",
        listHover: "rgba(34, 34, 34, 0.4)",
        listBg: "rgba(0, 0, 0, 0.2)",
        cardHover: "rgba(179, 179, 179, 0.2)",
        tab: "#333333",
        tabHover: "rgba(70, 70, 70, 1)",
        textGrey: "#B3B3B3",
        playerColor: "rgba(24, 24, 24, 1)",
        green: "#6CC04A",
      },
    },
  },
  plugins: [],
};
