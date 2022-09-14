import React, { useState, useEffect, useCallback } from "react";
// 用于记录 getData 调用次数
let count = 0;

function CallbackTwo() {
  const [val, setVal] = useState("");

  // 死循环的模拟请求
  // function getData() {
  //   setTimeout(() => {
  //     setVal("new data " + count);
  //     count++;
  //   }, 500);
  // }

  // 使用useCallback
  const getData = useCallback(() => {
    setTimeout(() => {
      setVal("new data " + count);
      count++;
    }, 500);
  }, []);

  return <Child val={val} getData={getData} />;
}

function Child({ val, getData }) {
  useEffect(() => {
    getData();
  }, [getData]);

  return <div>打印结果: {val}</div>;
}

export default CallbackTwo;
