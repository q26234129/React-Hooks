import React, { useState } from "react";

function PageCount(props) {
  // 数字、字符串、对象、数组、表达式等
  const [count, setCount] = useState(() => {
    if (props.initCount < 100) {
      return props.initCount;
    } else {
      return props.initCount + 100;
    }
  });

  console.log("更新了");

  return (
    <>
      <h3>Demo01-useState-表达式</h3>
      <span style={{ color: "#666" }}>useState 应用</span>
      <p>count：{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default PageCount;
