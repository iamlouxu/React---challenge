import { useState } from "react";
import { Return } from "./components/data.js";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <span>目前數字：{count}</span>
      <button onClick={() => setCount(Return(count))}>-1</button>
    </>
  );
}

export default App;
