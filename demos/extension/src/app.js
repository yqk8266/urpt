import Vue from 'vue';
import App from './editor/index';
import Urpt from 'main/index.js';
import 'packages/theme-chalk/src/index.scss';

export default () => {
  Vue.use(Urpt, { zIndex: 100000 });
  const root = document.createElement('div');
  document.body.appendChild(root);

  window.ga = function() {
    console.log(arguments);
  };

  new Vue({ // eslint-disable-line
    render: h => h(App)
  }).$mount(root);
};
