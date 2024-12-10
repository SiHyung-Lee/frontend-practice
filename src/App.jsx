import { useReducer } from "react";

const initial = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <h1>count: {state.count}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREASE" })}>
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREASE" })}>
        -
      </button>
    </div>
  );
}

export default App;
