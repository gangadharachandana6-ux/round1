import React, { useState } from "react";
import axios from "axios";
function LogInteraction() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:8000/log", { message: text });
    setResponse(res.data.summary);
  };
  return (
    <div>
      <h2>Log Interaction</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h3>AI Summary:</h3>
      <p>{response}</p>
    </div>
  );
}
export default LogInteraction;
