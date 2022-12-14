import React, { useState } from "react";
import usePubliCount from "./public";

function CountAPage() {
  const [count, setCount] = useState(1);
  const countA = usePubliCount(count);

  return (
    <>
      <h3>Demo - 自定义 Hook 使用</h3>
      <p>countA：{countA}</p>

      <br />
      <p>count：{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}

export default CountAPage;
