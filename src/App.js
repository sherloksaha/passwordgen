import "./App.css";
import { useRreducer } from "./useRreducer";

export default function App() {
  const [values, dispatch, types] = useRreducer();
  return (
    <div className="box">
      <h2 style={{ textAlign: "center" }}>PASSWORD GENERATOR</h2>
      <div className="ranges">
        <div className="innerrange">
          <label>Password Length : {values.length}</label>
          <br />
          <input
            onChange={(e) => {
              dispatch({ type: types.ADD_STRENGTH, payload: e.target.value });
            }}
            type="range"
            min="0"
            max="15"
          />
        </div>
        <div className="innerrange">
          <label>include number</label>
          <input
            type="checkbox"
            onChange={() => {
              dispatch({
                type: types.ADD_TYPES,
                payload: "number",
              });
            }}
          />
        </div>
        <div className="innerrange">
          <label>include text</label>
          <input
            type="checkbox"
            onChange={() => {
              dispatch({
                type: types.ADD_TYPES,
                payload: "text",
              });
            }}
          />
        </div>
        <div className="innerrange">
          <label>include special char</label>
          <input
            type="checkbox"
            onChange={() => {
              dispatch({
                type: types.ADD_TYPES,
                payload: "specialchar",
              });
            }}
          />
        </div>
      </div>
      <div
        style={{
          border: "2px solid green",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        <p>{values.canGen ? `${values.pass}` : "can not generate"}</p>
        <small>strength: {values.canGen && values.str}</small>
      </div>

      <button
        className="btn"
        onClick={() => dispatch({ type: "gen", payload: values })}
      >
        generate Password
      </button>
      <button
        style={{ marginTop: "5px" }}
        className="btn"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
}
