import React, { useContext } from "react";
import { List, Paper, Divider, ListItem } from "@mui/material";
import ToDo from "./ToDo";
import { ToDoContext } from "./context/todoContext";

function ToDoList() {
  const state = useContext(ToDoContext);
  if (state.length) {
    return (
      <Paper>
        <List>
          {state.map((todo, index) => {
            return (
              <div key={todo.id}>
                <ListItem>
                  <ToDo todo={todo} />
                </ListItem>
                {index < state.length - 1 ? (
                  <Divider variant="inset" component="li" />
                ) : null}
              </div>
            );
          })}
        </List>
      </Paper>
    );
  }
  return null;
}

export default ToDoList;
