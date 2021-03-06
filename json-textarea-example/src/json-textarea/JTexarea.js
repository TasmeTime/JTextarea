import { useEffect, useState } from "react";
import styles from "./JTexarea.module.css";

export default function JTexarea(props) {
  const [value, setValue] = useState("");
  const [jsonParseError, setJsonParseError] = useState(false);
  useEffect(() => {
    if (!props.onPass) throw new Error("onPass is required :/");
  }, []);

  function onBlur(e) {
    //validating the texarea's value
    try {
      const v = e.target.value;
      if (v === "") {
        setJsonParseError(false);
      } else {
        const obj = JSON.parse(v);
        setValue(obj);
        props.onPass(obj);
        e.target.value = JSON.stringify(obj, undefined, 4);
        setJsonParseError(false);
      }
    } catch (err) {
      if (props.onError) props.onError(e.target.value, err);
      setJsonParseError(true);
    }
  }

  return (
    <textarea
      className={
        styles.JTextarea +
        " " +
        (props.className
          ? props.className +
            " " +
            (jsonParseError ? styles.error : styles.success)
          : jsonParseError
          ? styles.error
          : styles.success)
      }
      rows={props.Rows || ""}
      id={props.Id || ""}
      name={props.Name || ""}
      cols={props.Cols || ""}
      onBlur={onBlur}
      defaultValue={JSON.stringify(value, undefined, 4)}
    ></textarea>
  );
}
