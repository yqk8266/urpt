## 快速上手

### 如何引入 Urpt

可以引入整个 Urpt，也可以按需引入。

#### 完整引入

在 main.js(入口文件) 中写入以下内容：

```javascript
import Vue from 'vue';
import UrptUI from 'urpt-ui';
import 'urpt-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(UrptUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，只引入需要的组件。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "urpt-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

使用的时候只需要在main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'urpt-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
