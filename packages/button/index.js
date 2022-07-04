import TcButton from './src/button';

/* istanbul ignore next */
TcButton.install = function(Vue) {
  Vue.component(TcButton.name, TcButton);
};

export default TcButton;
