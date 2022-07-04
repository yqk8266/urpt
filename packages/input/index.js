import TcInput from './src/input';

/* istanbul ignore next */
TcInput.install = function(Vue) {
  Vue.component(TcInput.name, TcInput);
};

export default TcInput;
