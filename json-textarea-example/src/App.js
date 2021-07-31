import JTexarea from "./json-textarea/JTexarea";
import "./App.css";
import { useState } from "react";

function App() {
  const [valid, setValid] = useState(true);
  //called when the input is successfully parsed to js object
  function onPass(object) {
    setValid(true);
    console.log("PASSED: ", object);
  }

  //called while there is an error
  function onError(value, error) {
    setValid(false);
    console.log(value, error);
  }

  return (
    <div className="container">
      <JTexarea onPass={onPass} onError={onError} />
      <h3>{valid ? "Valid Json :)" : "Invalid JSON :("}</h3>
    </div>
  );
}

export default App;
