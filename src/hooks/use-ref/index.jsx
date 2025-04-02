import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);
  // 将这个ref用在input上，那么inputRef代表的就是那个input元素
  // 它的值的修改，不会触发rerender
  const inputRef = useRef();

  const getValue = () => {
    console.log(previousCount.current, inputRef.current.value);
  };

  useEffect(() => {
    // 输出为+1之后的值
    console.log("useEffect trigger", count);
    // 其实previousCount.current已经被更新为count了
    // 但是因为它是useRef的，它的值的更新并不会发生rerender，所以页面上显示的仍然是上一次的值
    previousCount.current = count;
    // 输出与count相同
    console.log("useEffect previousCount.current", previousCount.current);
    inputRef.current.focus();
  }, [count]);

  // 由此可见，界面先显示完成之后
  // useEffect才被调用

  return (
    <>
      <p> Count: {count}</p>
      <p> Previous Count: {previousCount.current} </p>
      <input ref={inputRef} />
      <button onClick={() => setCount((prev) => prev + 1)}> Increment</button>
      <button onClick={getValue}> Get Value</button>
    </>
  );
};
