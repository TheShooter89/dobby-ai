import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  base: "/dobby-ai/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsx: "transform"
  },
})
