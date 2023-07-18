// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
   components: {
      dirs: ["~/components"],
   },
   alias: {
      "@": resolve(__dirname, "/"),
   },
   css: [
      "~/assets/main.scss",
      "~/assets/css/animate.css",
      "~/assets/css/LineIcons.css",
      "~/assets/css/tailwindcss.css"
   ],
   postcss: {
      plugins: {
         tailwindcss: {
            content: [
               "./components/**/*.{js,vue,ts}",
               "./layouts/**/*.vue",
               "./pages/**/*.vue",
               "./plugins/**/*.{js,ts}",
               "./nuxt.config.{js,ts}",
               "./app.vue",
            ],
         },
         autoprefixer: {},
      },
   },
});
