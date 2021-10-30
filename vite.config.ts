import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import windi from "vite-plugin-windicss";
import autoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
        },
    },
    plugins: [
        vue(),
        windi(),
        autoImport({
            imports: ["vue", "vue-router", "@vueuse/core"],
            dts: true,
        }),
    ],
});
