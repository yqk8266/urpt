## Button 按钮
常用的操作按钮。

### 代码示例

基础组件按钮，按需使用。

:::demo 按钮的类型有默认按钮、主按钮、文字按钮、圆角按钮、以及4种颜色按钮

```html
<tc-row>
  <tc-button>Default</tc-button>
  <tc-button type="primary">Pramary</tc-button>
  <tc-button type="text">Text</tc-button>
  <tc-button round>Round</tc-button>
  <tc-button type="info">Info</tc-button>
  <tc-button type="success">Sussess</tc-button>
  <tc-button type="warning">Warning</tc-button>
  <tc-button type="danger">Danger</tc-button>
</tc-row>
```
:::

### 禁用

按钮禁用状态。

:::demo 使用`disabled`属性来禁用按钮。

```html
<tc-row>
  <tc-button disabled>Default</tc-button>
  <tc-button type="primary" disabled>Primary</tc-button>
  <tc-button type="success" disabled>Success</tc-button>
  <tc-button type="info" disabled>Info</tc-button>
  <tc-button type="warning" disabled>Warning</tc-button>
  <tc-button type="danger" disabled>Danger</tc-button>
</tc-row>
```
:::

### 图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Urpt 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<tc-button type="success" icon="el-icon-download">Download</tc-button>
<tc-button type="success">Upload<i class="el-icon-upload el-icon--right"></i></tc-button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<tc-button-group>`标签来嵌套你的按钮。

```html
<tc-button-group>
  <tc-button type="primary" icon="el-icon-arrow-left">上一页</tc-button>
  <tc-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></tc-button>
</tc-button-group>
<tc-button-group>
  <tc-button type="primary" icon="el-icon-plus"></tc-button>
  <tc-button type="primary" icon="el-icon-edit"></tc-button>
  <tc-button type="primary" icon="el-icon-delete"></tc-button>
</tc-button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<tc-button type="primary" :loading="true">加载中</tc-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<tc-row>
  <tc-button size="medium">medium</tc-button>
  <tc-button size="small">small</tc-button>
  <tc-button size="mini">mini</tc-button>
</tc-row>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
