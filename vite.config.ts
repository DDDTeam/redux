import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((_) => {
  return {
    plugins: [tsconfigPaths()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      lib: {
        entry: "src/index.ts",
        name: "DDD Redux",
        formats: ["es"],
        fileName: "ddd-redux",
      },
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
      cssCodeSplit: false,
    },
  };
});
