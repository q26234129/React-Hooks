import React, { useState } from "react";
import usePubliCount from "./public.js";

function CountBPage(props) {
  const [countB, setCountB] = useState(usePubliCount(props.initCount));

  return (
    <>
      <p>{countB}</p>
      <button onClick={() => setCountB(countB + 10)}>Add</button>
    </>
  );
}

export default CountBPage;
