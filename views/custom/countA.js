import React from "react";
import usePubliCount from "./public.js";

function CountAPage(props) {
  const [countA, setCountA] = usePubliCount(props.initCount);

  return (
    <>
      <h3>Demo - 自定义 Hook 使用</h3>
      <span style={{ color: "#666" }}>custom 文件</span>
      <p>{countA}</p>
      <button onClick={() => setCountA(countA + 1)}>Add</button>
    </>
  );
}

export default CountAPage;
