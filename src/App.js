import "./styles.css";
import React, { useState } from "react";
import Count from "../views/Count.js";
import CountClass from "../views/CountClass.js";
import CountHook from "../views/CountHook.js";
import PageEffect from "../views/PageEffect.js";
import ContextOne from "../views/contextOne/context";
import ContextTwo from "../views/contextTwo/context";
import PageCallBack from "../views/PageCallBack";
import CallBackTwo from "../views/callBackTwo";
import PageMemo from "../views/PageMemo";

import CountA from "../views/custom/countA";
import CountB from "../views/custom/countB";

import CustomTwo from "../views/customTwo/index";

// react中组件名称的首字母必须要用大写。
// 原因：React中使用JSX语法，但浏览器无法识别JSX语法，需通过babel对JSX语法进行转义；
// 而如果组件的首字母为小写时，其会被认定为原生DOM标签，创建一个不存在的标签是会报错的。

export default function App() {
  const [isShowPage, setIsShowPage] = useState(null);
  // 注意1：React是根据useState出现的顺序来确定自己的state的。
  // 注意2：React Hooks不能出现在条件判断语句（ if … else …）中，因为它必须有完全一样的渲染顺序
  let loadPage = (val) => {
    setIsShowPage(val);
  };

  const menuList = [
    {
      name: "count-class",
      key: "CountClass"
    },
    {
      name: "count-hook",
      key: "CountHook"
    },
    {
      name: "count",
      key: "Count"
    },
    {
      name: "useEffect",
      key: "PageEffect"
    },
    {
      name: "contextOne",
      key: "ContextOne"
    },
    {
      name: "contextTwo",
      key: "ContextTwo"
    },
    {
      name: "callBack",
      key: "PageCallBack"
    },
    {
      name: "CallBackTwo",
      key: "CallBackTwo"
    },
    {
      name: "自定义Hook1",
      key: "CountA"
    },
    {
      name: "自定义Hook2",
      key: "CountB"
    },
    {
      name: "自定义TWO-1",
      key: "CustomTwo"
    },
    {
      name: "useMemo",
      key: "PageMemo"
    }
  ];
  return (
    <div className="App">
      <div className="pageMenu">
        {/* 循环菜单 */}
        {menuList.map((item, index) => {
          return (
            <span
              className={`${isShowPage === item.key ? "spanActive" : ""}`}
              title={item.title}
              key={index}
              onClick={() => loadPage(item.key)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="pageDemo">
        {/* 页面 */}
        {isShowPage === "Count" ? <Count initCount={0} /> : ""}
        {isShowPage === "CountClass" ? <CountClass /> : ""}
        {isShowPage === "CountHook" ? <CountHook /> : ""}
        {isShowPage === "PageEffect" ? <PageEffect initCount={20} /> : ""}
        {isShowPage === "PageCallBack" ? <PageCallBack /> : ""}
        {isShowPage === "CallBackTwo" ? <CallBackTwo /> : ""}
        {isShowPage === "ContextOne" ? <ContextOne /> : ""}
        {isShowPage === "ContextTwo" ? <ContextTwo /> : ""}
        {isShowPage === "PageMemo" ? <PageMemo /> : ""}
        {isShowPage === "CountA" ? <CountA /> : ""}
        {isShowPage === "CountB" ? <CountB initCount={20} /> : ""}
        {isShowPage === "CustomTwo" ? <CustomTwo /> : ""}
      </div>
    </div>
  );
}
