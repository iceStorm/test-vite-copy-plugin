import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";

import { resolve } from "path";

// this works on both Operating Systems
function getPath(relativePath: string) {
  return normalizePath(resolve(__dirname, relativePath));
}

// this will not work on Windows, but still works on MacOS
// function getPath(relativePath: string) {
//   return resolve(__dirname, relativePath);
// }

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7501
  },
  preview: {
    port: 7502
  },

  plugins: [
    react(),

    copy({
      targets: [
        {
          src: getPath("./src/services/mocks"),
          dest: getPath("./public"),
        },
      ],
      hook: "buildStart",
    }),
  ],
});
