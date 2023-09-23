import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

/* PLUGINS 
  svgr : manages svg icons 
*/
export default defineConfig({
  plugins: [react(), svgr()],
});
