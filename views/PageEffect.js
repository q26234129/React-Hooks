import React, {
  useState,
  useEffect
  // useCallback,
  // useMemo,
  // useRef
} from "react";

export default function PageTwo(props) {
  const { initCount } = props;

  const [count, setCount] = useState(0);
  const [countChangeHtml, setCountChangeHtml] = useState("");

  useEffect(() => {
    console.log(initCount);
    setCountChangeHtml("effect with deps" + count);
  }, [count]);

  return (
    <>
      <h3>Demo - 02</h3>
      <span style={{ color: "#666" }}>useEffect 应用</span>
      <p>
        计数: {count} &nbsp;
        <button onClick={() => setCount(count + 1)}>Add</button>
      </p>
      <b>{countChangeHtml}</b>
    </>
  );
}
