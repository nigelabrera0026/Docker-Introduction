import { defineConfig } from 'vite';
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig( () => {
  if (process.env.BUILD_TYPE === 'storybook') {
    return {
      plugins: [react(),  reactRefresh()],
      base: "/storybook",
      esbuild: {
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
      }
    }
  } else {
    return {
      plugins: [react(),  reactRefresh()],
      esbuild: {
        jsxFactory: "React.createElement",
        jsxFragment: "React.Fragment",
      }
    }
  }
})
