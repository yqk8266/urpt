## Radio 单选框

基本组件-单选框

### 代码示例

通过v-model可以双向绑定数据。

:::demo 选中的值为 Radio对应的 `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
  <tc-radio v-model="radio" label="1">城乡客运</tc-radio>
  <tc-radio v-model="radio" label="2">定制客运</tc-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 禁用

单选框不可用的状态。

:::demo 只要在`tc-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。
```html
<template>
  <tc-radio disabled v-model="radio" label="城乡客运">城乡客运</tc-radio>
  <tc-radio disabled v-model="radio" label="定制客运">定制客运</tc-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '定制客运'
      };
    }
  }
</script>
```
:::

### 选项组

适用于在多个互斥的选项中

:::demo 结合`tc-radio-group`元素和子元素`tc-radio`可以实现单选组，在`tc-radio-group`中绑定`v-model`，在`tc-radio`中设置好`label`即可，每个radio的内容可自定义，不填写则默认label的值。

```html
<template>
  <tc-radio-group v-model="radio">
    <tc-radio :label="3">备选项</tc-radio>
    <tc-radio :label="6">备选项</tc-radio>
    <tc-radio :label="9">备选项</tc-radio>
  </tc-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```
:::

### 样式

按钮样式的单选组合。

:::demo 把`tc-radio`元素换成`tc-radio-button`元素即可。
```html
<template>
  <div>
    <tc-radio-group v-model="radio1">
      <tc-radio-button label="上海"></tc-radio-button>
      <tc-radio-button label="北京"></tc-radio-button>
      <tc-radio-button label="广州"></tc-radio-button>
      <tc-radio-button label="深圳"></tc-radio-button>
    </tc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <tc-radio v-model="radio1" label="1" border>备选项1</tc-radio>
    <tc-radio v-model="radio1" label="2" border>备选项2</tc-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '上海'
      };
    }
  }
</script>
```
:::

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
