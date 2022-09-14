import React, { useContext } from "react";

import HelloContext from "./HelloContext";

// 孙组件
const Grandsons = () => {
  const val = useContext(HelloContext);
  return <div>{val}</div>;
};

// 子组件
const Child = () => {
  return <Grandsons />;
};

// 父组件（父传孙示例）
const { Provider } = HelloContext;
const Parent = () => {
  return (
    // 在根组件中使用 Provider 组件包裹需要接收数据的后代组件，并通过 value 属性提供要共享的数据
    // 提供者：Provider  消费者：Consumer
    <Provider value="Hello Context">
      <Child />
    </Provider>
  );
};

export default Parent;
