import { useState } from "react";

export const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // count在当前页面一定是不会变的，rerender发生之后，count的值才发生变化
    // 总是使用当前值，所以页面上总是 +1
    // setCount(count + 1);
    // setCount(count + 1);

    // 使用的是前一次的值，所以页面上会正确的显示 +2
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    console.log(count);
  };

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={increaseCount}> Increase Counter</button>
    </div>
  );
};
