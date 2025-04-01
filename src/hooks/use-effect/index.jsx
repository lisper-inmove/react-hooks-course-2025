import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [showPedro, setShowPedro] = useState(false);

  // only once when the component mounted
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // every time showPedro changed
  useEffect(() => {
    console.log("Pedro");
  }, [showPedro]);

  // Any state changed
  useEffect(() => {
    console.log("Empty useEffect");
  });

  return (
    <div>
      <button onClick={() => setShowPedro((prev) => !prev)}> Toggle </button>
      <h1> Posts</h1>
      <ul>
        {data.map((item) => (
          <li>{item.title} </li>
        ))}
      </ul>
    </div>
  );
};
