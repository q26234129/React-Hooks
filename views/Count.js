import React, {
  useState
  // useEffect
  // useCallback,
  // useMemo,
  // useRef
} from "react";

function PageOne(props) {
  const [count, setCount] = useState(() => {
    if (props.initCount < 100) {
      return props.initCount;
    } else {
      return props.initCount + 100;
    }
  });
  // console.log("更新了");
  return (
    <>
      <h3>Demo01 - 计数器</h3>
      <span style={{ color: "#666" }}>useState 应用</span>
      {/* 一个曾经踩过的内联样式的坑
      除了外部那个表示Javascript语句的花括号外，里面必须再写一个花括号{}包含的对象，
      外部的{ }表示这是Javascript句法，里面的{  }是一个对象 
      1、写法更加简洁
      */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default PageOne;
