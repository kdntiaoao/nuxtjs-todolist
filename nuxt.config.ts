// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      id: process.env.NUXT_PUBLIC_ID,
    },
  },
  modules: ['@pinia/nuxt'],
});
