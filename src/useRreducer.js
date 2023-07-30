import { useReducer } from "react";
const initalVal = {
  length: 15,
  typeVal: [],
  canGen: true,
  pass: "",
  str: "",
};
const types = {
  ADD_TYPES: "add.type",
  ADD_STRENGTH: "Add.strength",
  GEN: "gen",
};
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const schars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const texts = range("a".charCodeAt(0), "z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
);

function reducerF(state, action) {
  switch (action.type) {
    case types.ADD_STRENGTH:
      return { ...state, length: action.payload };
    case types.ADD_TYPES:
      return calculateStr(state, action.payload);
    case types.GEN:
      return generates(action.payload);
  }
}

function generates(s) {
  let p = "";
  if (s.length < 6 || !s.typeVal.length) {
    return { ...s, canGen: false, pass: "" };
  }
  for (let i = 0; i < +s.length; i++) {
    let ind = Math.floor(Math.random() * s.typeVal.length);
    if (s.typeVal[ind] == "number") {
      p = p + numbers[Math.floor(Math.random() * numbers.length)];
    } else if (s.typeVal[ind] == "text") {
      p = p + texts[Math.floor(Math.random() * texts.length)];
    } else if (s.typeVal[ind] == "specialchar") {
      p = p + schars[Math.floor(Math.random() * schars.length)];
    }
  }
  return { ...s, pass: p, str: s.typeVal.length == 3 ? "Strong" : "week" };
}

const calculateStr = (state, arr) => {
  let stateVal = state?.typeVal?.slice();
  let k = [];
  if (stateVal?.includes(arr)) {
    k = stateVal.filter((e) => e !== arr);
  } else {
    stateVal.push(arr);
    k = stateVal;
  }
  return { ...state, typeVal: k, canGen: true };
};

export const useRreducer = () => {
  const [values, dispatch] = useReducer(reducerF, initalVal);

  return [values, dispatch, types];
};
