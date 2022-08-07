官方文档地址：https://react.docschina.org/docs/hooks-intro.html

### 什么是 Hook

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

本质：函数时编程

### 为什么是 Hook

官方说法：
·在组件之间复用状态逻辑很难
·复杂组件变得难以理解
·难以理解的 class

### 注意事项 ？？？

### React 中内置的 Hook API

https://react.docschina.org/docs/hooks-reference.html

## useState 的使用

# 使用方法

    // useState 传入的 initialState 是当前 state 的初始值
    // 在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state
    const [state, setState] = useState(initialState);

# 更新 state 数据需要调用 setState ，两种写法

    // 1. 直接调用 setState 传入更新数据
    setState(state + 1)
    // 2. 对于复杂的更新逻辑使用函数式更新
    setState(() => state + 1)

# 如果定义的初始数据是引用类型，使用函数式更新结合扩展运算符(进行合并或局部更新)

    const [arr, setArr] = useState({a:1, b:2});
    setArr(() => {
      return {
        ...arr,
        // 其他属性
      }
    })

## 初始 state 的理解

1.  惰性 state
    initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
2.  复杂初始 state 的定义
    如初始 state 需要通过计算获得，则可以传入一个函数，在函数中计算并返回初始的 state

    **如果更新的数据和上次一样，React 将会跳过子组件的渲染几 effect 的执行**

## useContext 的使用

_接收一个 context 对象并返回该 context 的当前值，使用 useContext 可以实现跨级组件之间的数据通讯_

基本使用(官方案例)

```
// js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
// 创建上下文
const ThemeContext = React.createContext(themes.light);
// 父组件
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
// ThemeButton
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```
