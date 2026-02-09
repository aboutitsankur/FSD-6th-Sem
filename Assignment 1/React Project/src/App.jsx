import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const createFile = async () => {
    const res = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await res.text();
    setResult(data);
  };

  const readFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.text();
    setResult(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>FS Model Demo</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
        style={{ width: 300, padding: 8 }}
      />

      <br /><br />

      <button onClick={createFile}>FS Create</button>
      <button onClick={readFile} style={{ marginLeft: 10 }}>
        FS Read
      </button>

      <h3>Result:</h3>
      <div>{result}</div>
    </div>
  );
}

export default App;
