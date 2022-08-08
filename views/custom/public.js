import { useState } from "react";

// public.js 为公共函数方法，分别由 countA 和 countB 两个组件调用。
// 两个不同的组件又分别有自己的处理逻辑

function usePubliCount(data) {
  const [count, setCount] = useState(data);

  // //此处加入一些公共的处理逻辑
  // if (count > 30) {
  //   setCount(0);
  // }

  return [count, setCount];
}

export default usePubliCount;
