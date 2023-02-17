import React from "react";
import Paper from "@mui/material/Paper";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { Grid } from "@mui/material";

// import { ToDoContext } from "./context/todoContext";

function ToDoApp() {
  return (
    <Paper style={{ margin: "0", padding: "1rem", height: "100vh" }}>
      {" "}
      <NavBar />
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={7} lg={7}>
          <ToDoForm /> <ToDoList />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;
