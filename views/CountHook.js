import React, { useState } from "react";

function PageOne(props) {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <h3>Demo01-useState-计数器</h3>
      <span style={{ color: "#666" }}>useState 应用</span>
      {/* 内联样式
      除了外部那个表示Javascript语句的花括号外，里面必须再写一个花括号{}包含的对象，
      外部的{ }表示这是Javascript句法，里面的{  }是一个对象
      */}
      <p>count：{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/* <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button> */}
    </>
  );
}

export default PageOne;
