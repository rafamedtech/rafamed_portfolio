const axios = require("axios");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Rafamed Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css",
      },
    ],
  },

  loading: { color: "#3B8070" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main", "aos/dist/aos.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/aos", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  publicRuntimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    strapiUrl: process.env.STRAPI_URL,
  },
  privateRuntimeConfig: {
    supabaseKey: process.env.SUPABASE_KEY,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "nuxt-supabase",
      {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/strapi",
    "@nuxtjs/sitemap",
  ],

  strapi: {
    url: process.env.STRAPI_URL,
    entities: ["projects", "posts"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: "http://localhost:1337",
    baseURL: "https://rafamed.dev",
  },

  // sitemap: {
  //   hostname: "https://rafamed.dev",
  //   routes: async () => {
  //     let { data } = await axios.get(
  //       `${process.env.STRAPI_URL}/api/posts?populate=*`
  //     );
  //     return data.data.map((post) => `/blog/${post.slug}`);
  //   },
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
