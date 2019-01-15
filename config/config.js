
// ref: https://umijs.org/config/
import pageRoutes from './router.config';

export default {
  base: '/dist',
  publicPath: '/dist/',
  sass: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true
      },
      dynamicImport: false,
      title: 'myapp',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }
    ],
  ],
  "proxy": {
    "/api": {
      "target": "https://api.9uche.com/mobile/index.php",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  // 路由配置
  routes: pageRoutes,
}
