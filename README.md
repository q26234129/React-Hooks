·
·
官方文档地址：https://react.docschina.org/docs/hooks-intro.html

# 什么是 Hook

Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
_Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。_

# 为什么是 Hook

官方说法：

· 在组件之间复用状态逻辑很难

· 复杂组件变得难以理解

· 难以理解的 class

_简单概括：
Hook 的本质是函数式编程；我们可以使用函数来定义各种状态、逻辑，这些函数有更强的组合性、重用性；同时，仍然可以进行状态的访问和维护。_

_最重要的是，Hook 和现有代码可以同时工作，你可以渐进式地使用他们。Hook 是向下兼容的。_

## React 中内置的 Hook API

https://react.docschina.org/docs/hooks-reference.html

# useState 的使用

### 使用方法

    const [state, setState] = useState(initialState);
    // useState 传入的 initialState 是当前 state 的初始值
    // 在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state

### 更新 state 数据需要调用 setState ，两种写法

    // 1. 直接调用 setState 传入更新数据
    setState(state + 1)
    // 2. 对于复杂的更新逻辑使用函数式更新
    setState(() => state + 1)  <===> onClick={() => {handleClick();}}

### 如果定义的初始数据是引用类型，使用函数式更新结合扩展运算符(进行合并或局部更新)

    const [arr, setArr] = useState({a:1, b:2});
    const handleClick = () => {
      setArr(() => {
        return {
          ...arr,
          // 其他属性
        };
      });
    };

### 初始 state 的理解

1.  惰性 state
    initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
2.  复杂初始 state 的定义
    如初始 state 需要通过计算获得，则可以传入一个函数，在函数中计算并返回初始的 state

    **如果更新的数据和上次一样，React 将会跳过子组件的渲染及 effect 的执行**

### 注意事项(使用规则)

1. 只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook

   ```
   if (count > 10) {
     const [count1, setCount1] = useState(0);
   }
   ```

2. 只在 React 函数中调用 Hook，不要在普通的 JavaScript 函数中调用 Hook

# useEffect 的使用

. React 在完成对 DOM 的更新后会执行。
默认情况下， React 会在每次渲染后调用副作用函数，包括第一次渲染的时候。
_“副作用”一词之来源----你之前可能已经在 React 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。_
_与之呼应的是“纯函数” ·确定的输入，产生确定的输出，与执行次数、时间无关 ·不产生副作用_

. useEffect 有两个参数。

```
useEffect(didSomething,[]);
```

第一个参数是副作用的处理函数；
第二个参数是与该副作用关联的状态或属性依赖数组。第二个参数为空数组时，表示该副作用不依赖任何值变化，只会在组件完成初次渲染后执行一次。

### useEffect 三种使用方式

    **
    1、每次更新之后都要执行
    useEffect(() => {
      // 副作用函数的内容
    })

    2、初始化页面时 只执行第一次
    useEffect(() => {
      // 副作用函数的内容
    }, [])

    3、1 初始执行一次 2 每次依赖项的值变化时执行
    useEffect(() => {
      // 副作用函数的内容
    }, [依赖项]) //依赖项可以有多个
    **

    **
    ```
    useEffect(() => {
      setCount(1)
      console.log('更新了..', count)
    }, [])
    ```
    **

### useEffect 中的 return

    **
    ```
    useEffect(() => {
      // 注册监听逻辑
      console.log('开始监听')
      return () => {
        // 清除监听逻辑,组件销毁时被调用
        console.log('结束监听')
      }
    })
    ```
    **

    // 每次渲染后都执行清理或者执行 effect 可能会导致性能问题;
    // 所以此时可以使用第二个可选参数进行是否执行当前 effect 的优化。

### class 组件中 实现首次加载和卸载的方法

```
componentDidMount()
componentWillUnmout()
componentDidUpdate()
```

### 注意事项

1. useEffect 只能是一个同步函数，不能使用 async

   ```
    useEffect(()={
      async () => {
        const res = awiat xxx()
      }
    }, [])
   ```

# useContext 的使用

_接收一个 context 对象并返回该 context 的当前值，使用 useContext 可以实现跨级组件之间的数据通讯_

1.useContext 可以帮助我们跨越组件层级直接传递变量，实现数据共享。
2.Context 的作用就是对它所包含的组件树提供全局共享数据的一种技术。

###基本使用(官方案例)

    **
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
    **

# useCallback 的使用

### 基本写法

    **
    ```
    // 第一个参数是处理函数；第二个参数是一个数组，用于制定被记忆函数更新所依赖的值
    const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );
    ```
    **

### 为什么需要使用 useCallback

在函数式组件中，定义在组件内的函数会随着状态值的更新而重新渲染，函数中定义的函数会被频繁定义，在父子组件的通信中会非常消耗性能。使用 useCallback 结合 memo 可以有效的减少子组件的更新频率，提高效率。

    **
    ```
    // 父组件
    import React, { useState, useCallback } from "react";

    function Memoized() {
      const [count, setCount] = useState(0);

      const handleClick = () => {
        setCount(count + 1);
      };

      return (
        <div>
          <p>{count}</p>
          <button onClick={handleClick}>Add</button>
          <Child />
        </div>
      );
    }

    function Child(){
      console.log('我是子组件')
      return (
        <p>我是子组件</p>
      )
    }
    export default Memoized;

    // 子组件
    ```
    **

# 自定义 Hook

官方说明：通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。

· 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。
· ** 自定义 Hook 必须以 “use” 开头吗？必须如此。**

_自定义以前无法灵活共享逻辑的问题。可以创建涵盖各种场景的自定义 Hook，如表单处理、动画、订阅声明、计时器，甚至可能还有其他我们没想到的场景。_

# useMemo 的使用

### 基本用法

    **
    ```
    // 第一个参数用于处理耗时计算并返回需要记录的值；
    // 第二个参数为数组，用于指定被记忆函数更新所依赖的值
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```
    **

## useMemo 与 useCallback 的区别

· useMemo 传入的函数内部需要有返回值、返回的是一个值；useCallback 返回的是一个函数
· useMemo 只能声明在函数式组件内部
