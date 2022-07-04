import TcTable from './src/table';

/* istanbul ignore next */
TcTable.install = function(Vue) {
  Vue.component(TcTable.name, TcTable);
};

export default TcTable;
