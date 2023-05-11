<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            background: "black",
            color: "white",
          },
        },
      }),
      // backgroundImage: {
      //   "hero-pattern": "url('/public/hero.svg')",
      //   "hero-back": "url('/public/hero-bg.svg')",
      // },
      colors: {
        "nav-dark": "#000",
        "nav-light": "#fff",
      },
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  variants: {
    extends: {},
    typography: ["dark"],
  },
  plugins: [],
};
=======
module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            background: "black",
            color: "white",
          },
        },
      }),
      // backgroundImage: {
      //   "hero-pattern": "url('/public/hero.svg')",
      //   "hero-back": "url('/public/hero-bg.svg')",
      // },
      colors: {
        "nav-dark": "#000",
        "nav-light": "#fff",
      },
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  variants: {
    extends: {},
    typography: ["dark"],
  },
  plugins: [],
};
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
=======
module.exports = {
  purge: {
    enabled: true,
    content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["dark"], //specific classes
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            background: "black",
            color: "white",
          },
        },
      }),
      // backgroundImage: {
      //   "hero-pattern": "url('/public/hero.svg')",
      //   "hero-back": "url('/public/hero-bg.svg')",
      // },
      colors: {
        "nav-dark": "#000",
        "nav-light": "#fff",
      },
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  variants: {
    extends: {},
    typography: ["dark"],
  },
  plugins: [],
};
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
