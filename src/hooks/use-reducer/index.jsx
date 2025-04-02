import { useReducer } from "react";

const reducer = (state, action) => {
  // state 为前一次的值
  console.log("Current state", state);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // 此处返回的是新的state的值
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    default:
      console.log("No action type");
      return state;
  }
};

export const ReducerExample = () => {
  // useReducer的第一个参数就是使用dispatch时被调用的函数
  // 第二个参数则是初始值
  // 后面调用dispatch时只需要传action就行了，根据action对state做对应的操作
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "sad" })}>Error</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "double" })}>*</button>
    </div>
  );
};
