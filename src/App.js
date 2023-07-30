import "./App.css";
import { useRreducer } from "./useRreducer";

export default function App() {
  const [values, dispatch, types] = useRreducer();
  return (
    <div className="box">
      <h2 style={{ textAlign: "center" }}>PASSWORD GENERATOR</h2>
      <div className="ranges">
        <div className="innerrange">
          <label><b>Password Length : {values.length}</b></label>
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
          <label style={{lineHeight:'40px'}}><b>Include Number</b></label>
          <input
            type="checkbox"
            style={{height:'20px', width:'20px', position:'absolute', left:'150px',top:'8px'}}
            onChange={() => {
              dispatch({
                type: types.ADD_TYPES,
                payload: "number",
              });
            }}
          />
        </div>
        <div className="innerrange">
          <label style={{lineHeight:'40px'}}><b>Include TEXT</b></label>
          <input
            style={{height:'20px', width:'20px', position:'absolute', left:'150px',top:'8px'}}
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
          <label style={{lineHeight:'40px'}}><b>SPECIAL CHAR</b></label>
          <input
           style={{height:'20px', width:'20px', position:'absolute', left:'150px',top:'8px'}}
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
      {values.str && <div
        style={{
          border: "2px solid green",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        <p>{values.canGen ? `${values.pass}` : "can not generate"}</p>
       {values.str ?<small>strength: {values.str}</small>:""}
      </div>}

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
