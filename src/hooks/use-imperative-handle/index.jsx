import React, { useRef, useImperativeHandle, forwardRef } from "react";

/*
  相当于是从父组件传了一个变量到子组件，子组件为它关联了两个函数
  这样就能在父组件中调用在子组件中定义的函数了
  在子组件中可以控制给父组件暴露什么内容。可以在子组件中隐藏实现细节。
**/

// Parent Component
export const ImperativeHandleExample = () => {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  );
};

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose methods or properties to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus(); // Method to focus the input
    },
    clearInput: () => {
      inputRef.current.value = ""; // Method to clear the input
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});
