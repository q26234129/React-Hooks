import React, { useState, useCallback } from "react";

function Memoized() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default Memoized;
