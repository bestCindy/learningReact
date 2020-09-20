#### 01
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

#### 02
不能直接操作 `state` 的数据，然后再 `setState`，比如像下面这样
```
this.state.list.splice(index, 1);
this.setState({
    list: this.state.list
});
```
这样做会有很大的性能问题

#### 03
几个 jsx 坑
- 注释 ctrl+/
- 用 `class` 的时候需要写 `className`
- `label` 里面的 `for` 要用 `htmlFor`
- `dangerouslySetInnerHTML={{__html: item}}` 可以解析 html 标签

#### 04
一个提高效率的插件：simple react snippets
有一些快捷方式

#### 05
父子组件传值时候
- 在父组件调用子组件，需要传什么写在子组件的标签中
- 在子组件用 `props` 拿到需要传的值

#### 06
- 父组件给子组件传递数据是单向数据流
- 在子组件里面不能直接更改父组件的 property
- 可以通过绑定的方法更改

#### 07
- React 自带调试工具
- 可以在 chrome 应用商店上安装 React Developer Tools
- 在科学上网的前提下才能安装

#### 08
- `ref` 可以绑定 DOM
- `setState` 是异步的方法

#### 09 生命周期函数
什么是生命周期函数：在某一时刻可以自动执行的函数，注意 `constructor` 不属于生命周期，属于 ES6 的语法

生命周期函数分几个阶段：

Initialization
- setup props and state

Mounting
- componentWillMount
- render
- componentDidMount

Updation state
- shouldComponentUpdate
    - 返回 false 不会往下执行
- componentWillUpdate
- render
- componentDidUpdate

Updation props
- componentWillReceiveProps
    - 组件第一次存在于 dom 中，函数是不会被执行
    - 如果已存在 dom 中，函数才会被执行
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

Unmounting
- componentWillUnmounting

#### 10 组件优化
```
shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
        return true;
    };
    return false;
}
```

#### axios
- 可以远程请求数据
- npm install 四种形式
    - npm install xxx
        - 安装到项目目录下（node_modules），不会在 package.json 里面添加依赖
    - npm install -g xxx
        - 安装到全局
        - 具体安装到那个目录下面是根据配置 npm 的时候，prefix 的位置
    - npm install -save xxx
        - 安装到项目目录下（node_modules），并且会添加在 package.json dependencies 里面
    - npm install -save-dev xxx
        - 会安装在 dev dependencies 里面
- 推荐在 “componentDidMount” 里面加载数据，只加载一次，后期 update 的时候是不加载的




