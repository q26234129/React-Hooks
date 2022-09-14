import { useState, useMemo } from "react";

// public.js 为公共函数方法，分别由 countA 和 countB 两个组件调用。
// 两个不同的组件又分别有自己的处理逻辑

function usePubliCount(data) {
  // console.log("data", data);
  // count 未改变
  const [count] = useState(data);
  return useMemo(() => {
    console.log("调用了···");
    return count;
  }, [count]);

  // return useMemo(() => {
  //   //此处加入一些公共的处理逻辑
  //   console.log("调用了···");
  //   return data;
  // }, [data]);

  // // 传统JS函数
  // let a = data;
  // a = a++;
  // console.log(0);
  // return a;

  // // 加memo
  // return useMemo(() => {
  //   let a = data;
  //   return a;
  // }, [data]);
}

export default usePubliCount;
