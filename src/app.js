import Vue from 'vue';
import App from './app.vue';

// let vm = new Vue({
//   el: '#app',
//   render: h => h(App)
// });

// 此时，这个app.js是客户端、服务端公用，来获取实例
// 每个用户访问的时候，需要返回一个新的实例
// 使用一个函数，每次调用都返回一个新的实例

export default () => {
  let app = new Vue({
    // el: '#app',   // 服务端不需要挂载
    render: h => h(App)
  });
  return { app };
}