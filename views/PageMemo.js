import React, { useState, useMemo } from "react";

function MemoPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  // const [c, setC] = useState(0);

  const handleClick = (type) => {
    switch (type) {
      case "a":
        setA(a + 1);
        break;
      case "b":
        setB(b + 1);
        break;
      default:
        return false;
    }
  };

  const c = useMemo(() => {
    return a + b;
    // 返回dom
    // return <p>c的值: {a + b}</p>;
  }, [a, b]);

  return (
    <div>
      <p>a: {a}</p>
      <p>b: {b}</p>
      <p>c: {c}</p>
      <button
        onClick={() => {
          handleClick("a");
        }}
      >
        a +
      </button>
      <button
        onClick={() => {
          handleClick("b");
        }}
      >
        b +
      </button>
      <button
        onClick={() => {
          handleClick("c");
        }}
      >
        c +
      </button>
      <button
        onClick={() => {
          handleClick("d");
        }}
      >
        d +
      </button>
    </div>
  );
}
export default MemoPage;
