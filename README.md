# Json Texarea

Simple react textarea component which will parse and prettifies the input.

![JTexarea](https://user-images.githubusercontent.com/19800339/127748115-48098649-2dea-4fc7-8da4-786c41aa5f58.gif)


## How to use

1. copy `JTexarea.js` and `JTexarea.module.css` to your project directory (or where ever you desire)
2. import the component

```javascript
//replace the path below according to where you copied the component files
import JTexarea from "./JTexarea.js";
```

3. use the component :)

```javascript
import JTexarea from "./json-textarea/JTexarea";

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
      //onPass prop is required
      <JTexarea onPass={onPass} onError={onError} />
    </div>
  );
}
export default App;
```

## Props

| name      | Des                                                       | Optional |
| --------- | --------------------------------------------------------- | -------- |
| onPass    | called when the input is successfully parsed to js object | **no**   |
| onError   | called while there is an error                            | **yes**  |
| className | use it to pass custom classes to component                | **yes**  |
| row       | sets the row attribute on textarea                        | **yes**  |
| id        | sets the id attribute on textarea                         | **yes**  |
| name      | sets the name attribute on textarea                       | **yes**  |
| cols      | sets the cols attr attribute textarea                     | **yes**  |

`Feel free to use and fork this repo 😊`
