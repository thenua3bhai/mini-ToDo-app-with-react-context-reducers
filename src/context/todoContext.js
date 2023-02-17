import { createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/todoReducer";

export const ToDoContext = createContext();
export const DispatchContext = createContext();

export function ToDoProvider(props) {
  const initialToDos = JSON.parse(window.localStorage.getItem("state") || "[]");
  const [state, dispatch] = useReducer(reducer, initialToDos);
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <ToDoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ToDoContext.Provider>
  );
}
