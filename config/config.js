export default {
    singular: true,
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
         //页面展示title
         title: '空弦世界',
         externals: {
          "react": "window.React",
          "react-dom": "window.ReactDOM"
        },
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
       
      }],

    ],
   
   
    routes: [{
      path: '/',
      component: '../../layouts',
      routes: [
        { path: '/',component: './index' },
        { path: '/user',component: './User' },
        { path: '/cards', component: './changeUser' },
        { path: '/todo', component: './todo' },
        { path: '/todoList', component: './todoList' },
      ]
    }],
    proxy: {
      '/dev': {
        target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
      },
    },
  }