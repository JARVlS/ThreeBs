// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition:{
        name: "header",
        mode: "out-in"
    },
    head: {
      title: "ThreeBs",
    },
  }
});
