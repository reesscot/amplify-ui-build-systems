import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs({
      include: [
        // include using a glob pattern (either a string or an array of strings)
        "node_modules/buffer/index.js",

        // exclude files that are known to not be required dynamically, this allows for better optimizations
        "!node_modules/logform/index.js",
        "!node_modules/logform/format.js",
        "!node_modules/logform/levels.js",
        "!node_modules/logform/browser.js",
      ],
    }),
  ],
});
