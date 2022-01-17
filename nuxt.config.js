export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "rafamed_portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: { color: "#3B8070" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "nuxt-supabase",
      {
        supabaseUrl: "https://atvjxufozpfeqjlzwznr.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjU4ODMwMywiZXhwIjoxOTUyMTY0MzAzfQ.2ZRCh748peT1TNrI_P_at51gncwrdQHwvzitKh05f0s",
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/strapi",
  ],

  strapi: {
    url: "https://rafamed-portfolio.herokuapp.com",
    entities: ["projects"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: "http://localhost:1337",
    // baseURL: "http://localhost:8000",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Auth module configuration: https://go.nuxtjs.dev/config-auth
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: "/users/token/",
  //           method: "post",
  //           propertyName: "access_token",
  //         },
  //         refresh: {
  //           url: "/users/token/refresh/",
  //           method: "post",
  //         },
  //         logout: false,
  //         user: false,
  //         // user: {
  //         //   url: "/users/token/",
  //         //   method: "get",
  //         //   propertyName: "data.attributes",
  //         // },
  //       },
  //       tokenType: "",
  //     },
  //   },
  // },
};
