import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   hmr: true,
  //   port: 3001,
  //   proxy: {
  //     '/api': {
  //       target: "http://localhost:8081/", //目标代理接口地址
  //       secure: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "/api",
  //       }
  //     }
  //   }
  // },
  // resolve: {
  //   //配置路径别名
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // }
})
