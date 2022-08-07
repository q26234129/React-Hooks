import "./styles.css";
import React, { useState } from "react";
import Count from "../views/Count.js";
import CountClass from "../views/CountClass.js";
import PagEffect from "../views/PagEffect.js";
import UseContext from "../views/context/useContext";
import PageCallBack from "../views/PageCallBack";
import PageMemo from "../views/PageMemo";

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
      name: "page1",
      title: "·useState· 应用",
      key: "Count"
    },
    {
      name: "page1-class",
      title: "class 应用",
      key: "CountClass"
    },
    {
      name: "useEffect",
      title: "·",
      key: "PagEffect"
    },
    {
      name: "context",
      title: "·",
      key: "UseContext"
    },
    {
      name: "callBack",
      title: "·",
      key: "PageCallBack"
    },
    {
      name: "useMemo",
      title: "·",
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
        {isShowPage === "PagEffect" ? <PagEffect initCount={20} /> : ""}
        {isShowPage === "PageCallBack" ? <PageCallBack /> : ""}
        {isShowPage === "UseContext" ? <UseContext /> : ""}
        {isShowPage === "PageMemo" ? <PageMemo /> : ""}
      </div>
    </div>
  );
}
