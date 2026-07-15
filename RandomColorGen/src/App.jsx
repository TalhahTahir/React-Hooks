import { useState, useEffect } from "react";

function App() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("#444444");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  function randomGen(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexGen() {
    const data = "0123456789abcdef";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += data[randomGen(data.length)];
    }
    setColor(hex);
  }

  function handleRgbGen() {
    const r = randomGen(256);
    const g = randomGen(256);
    const b = randomGen(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <>
      <button onClick={() => setColorType("HEX")}>Set to HEX</button>
      <button onClick={() => setColorType("RGB")}>Set to RGB</button>
      <button
        onClick={
          colorType === "HEX" ? () => handleHexGen() : () => handleRgbGen()
        }
      >
        Generate
      </button>
      <h3>{colorType === "HEX" ? "Hex Color" : "RGB Color"}</h3>
      <h1>{color}</h1>
      By: Talha
    </>
  );
}

export default App;
