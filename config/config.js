export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        title: '我的第一个页面', //页面展示title
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      }],
    ],
    routes: [{
      path: '/',
      component: '../../layouts',
      routes: [
        {
          path: '/',
          component: './index'
        },
      ]
    }],
    
  }