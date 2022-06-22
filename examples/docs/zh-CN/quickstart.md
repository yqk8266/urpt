## 快速上手

本节将介绍如何在项目中使用 Urpt。


### 引入 Urpt

你可以引入整个 Urpt，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Urpt。

#### 完整引入

在 main.js 中写入以下内容：

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

以上代码便完成了 Urpt 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

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

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

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
