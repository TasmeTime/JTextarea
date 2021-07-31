import JTexarea from "./json-textarea/JTexarea";
import "./App.css";

function App() {
  //called when the input is successfully parsed to js object
  function onPass(object) {
    console.log("PASSED: ", object);
  }

  //called while there is an error
  function onError(value, error) {
    console.log(value, error);
  }

  return (
    <div className="container">
      <JTexarea onPass={onPass} onError={onError} />
    </div>
  );
}

export default App;
