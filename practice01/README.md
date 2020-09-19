#### day01
我们有一个 `Menu` 组件，这个组件有一个功能，在 input 框里面输入名字可以自动显示在列表里面

-  创建 view
    - 在 React 中，外层要有一个 `div`, 要不然会报错
    - 但是有的时候，不需要外层有一个 `div` 这时候，可以用 `Fragment` 替代
- 显示列表
    - 注意要给 `return` 的 list 加 `key`
- 更新 value
    - value 要放到 `this.state` 里面
    - 所有的 list 也放到 `this.state` 里面
    - input 框触发 `onChange` 事件的时候更新 value
    - 点击 button 的时候把 value 添加到 list 里面
- click, change 事件
    - 注意绑定 this