// @ts-check
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

//import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  //adapter:node( { mode:"standalone" }),
  integrations: [
    react(), 
    vue(),
    tailwind({ applyBaseStyles:false })
  ],
});
