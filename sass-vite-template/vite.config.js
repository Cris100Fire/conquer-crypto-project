import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        quienes_somos: resolve(__dirname, "quienes_somos.html"),
        cursos: resolve(__dirname, "cursos.html"),
        contact: resolve(__dirname, "contacto.html"),
        blog: resolve(__dirname, "blog.html"),
        login: resolve(__dirname, "login.html"),
        registro: resolve(__dirname, "registro.html"),
        aviso_legal: resolve(__dirname, "aviso_legal.html"),
        ia: resolve(__dirname, "curso_ia.html"),
        blockchain: resolve(__dirname, "curso_blockchain.html"),
        full_stack: resolve(__dirname, "curso_full_stack.html"),
        bitcoin: resolve(__dirname, "blog_btc-blockchain.html"),
        trends: resolve(__dirname, "blog_trends-full-stack.html"),
      },
    },
  },
});
