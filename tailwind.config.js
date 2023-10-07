module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "744px",
      // => @media (min-width: 744px) { ... }

      md: "834px",
      // => @media (min-width: 834px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        sx: "375px",
        xl1: "1360px",
      },
      colors: {
        // Black and white
        black: "#002032",
        white: "#FFFFFF",
        // Gray
        gray: {
          50: "#F2F4F5",
          100: "#E5E9EA",
          200: "#CCD2D6",
          400: "#99A6AD",
          600: "#667984",
          800: "#334D5B",
        },
        Tgray: {
          50: "#0020320D", //#002032 • 5%
          100: "#0020321A", //#002032 • 10%
          200: "#00203233", //#002032 • 20%
          400: "#00203266", //#002032 • 40%
          600: "#00203299", //#002032 • 60%
          800: "#002032CC", //#002032 • 80%
        },
        gradient: {
          50: "linear-gradient(135deg, #E8F9F3 0%, #FFFBEC 100%)", //#E8F9F3 – #FFFBEC
          100: "linear-gradient(135deg, #D0F2E6 0%, #FFF8DA 100%)", //#D0F2E6 – #FFF8DA
          500: "linear-gradient(135deg, #16C083 0%, #FFDA45 100%)", //#16C083 – #FFDA45
        },
        green: {
          50: "#E8F9F3",
          100: "#A2E6CD",
          200: "#D0F2E6",
          300: "#73D9B5",
          400: "#45CD9C",
          450: "#2DC68F",
          500: "#16C083",
          550: "#14B07B",
        },

        yellow: {
          50: "#FFFBEC",
          100: "#FFF8DA",
          200: "#FFF0B5",
          300: "#FFE98F",
          400: "#FFE16A",
          450: "#FFDE58",
          500: "#FFDA45",
          550: "#E5C743",
        },
        orange: {
          50: "#FFF8EC",
          100: "#FFF1D9",
          200: "#FFE3B3",
          300: "#FFD58D",
          400: "#FFC767",
          450: "#FFC054",
          500: "#FFB941",
          550: "#E5AA40",
        },
        red: {
          50: "#FBE8E8",
          100: "#F8D1D1",
          200: "#F1A2A2",
          300: "#E97474",
          400: "#E24545",
          450: "#DF2E2E",
          500: "#DB1717",
          550: "#C5181A",
        },
      },
      spacing: {
        spaceZero: "0px",
        spaceMin: "2px",
        spaceXxxSmall: "4px",
        spaceXxSmall: "6px",
        spaceXSmall: "8px",
        spaceSmall: "12px",
        spaceBase: "16px",
        spaceMidA: "20px",
        spaceMidB: "24px",
        spaceMidC: "28px",
        spaceLarge: "32px",
        spaceXLarge: "40px",
        spaceXxLarge: "48px",
        spaceXxxLarge: "56px",
        spaceSLarge: "64px",
        spaceSsLarge: "80px",
        spaceSssLarge: "96px",
        spaceHuge: "128px",
        spaceXHuge: "192px",
        spaceXxHuge: "256px",
        spaceXxxHuge: "384px",
        spaceMax: "512px",
      },
      borderRadius: {
        radiusZero: "0px",
        radiusMin: "4px",
        radiusSmall: "8px",
        radiusBase: "12px",
        radiusMid1: "16px",
        radiusMid2: "20px",
        radiusLarge: "28px",
        radiusHuge: "44px",
        radiusMax: "76px",
      },
    },
    fontFamily: {
      // sans: ['"PT Sans"', "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  // safelist: [
  //   {
  //     pattern: /bg-.+-.+/,
  //   },
  //   {
  //     pattern: /text-.+-.+/,
  //   },
  //   {
  //     pattern: /border-.+-.+/,
  //   },
  // ],
};
