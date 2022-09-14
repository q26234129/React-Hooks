import React, { useState, useEffect } from "react";

export default function PageTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 注册监听逻辑
    console.log("开始监听");
    return () => {
      // 清除监听逻辑
      console.log("结束监听");
    };
  }, []);
  // React 会在执行当前 effect 之前对上一个 effect 进行清除;
  // React 会在组件卸载的时候执行清除操作;
  // effect 在每次渲染的时候都会执行（没有第二个参数的时候）;

  // 控制台直接报错，可修改 ESLint 配置去掉报错，但会打乱自上而下的执行顺序，得不偿失且易出错
  // 示例地址：https://react.docschina.org/docs/hooks-rules.html
  // if (count) {
  //   useEffect(() => {
  //     console.log("abc");
  //   });
  // }

  return (
    <>
      <h3>Demo - Effect</h3>
      <span style={{ color: "#666" }}>useEffect 应用</span>
      <p>
        count的值: {count} &nbsp;
        <button onClick={() => setCount(count + 1)}>Add</button>
      </p>
    </>
  );
}
