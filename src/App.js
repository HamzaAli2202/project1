import React from "react";
import { Card, CardContent } from "@mui/material";
import { PropsMain } from "./components/Props/PropsMain";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { ApiFetch } from "./components/ApiFetch/ApiFetch";
import { Landing } from "./components/Routing/Landing";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <PropsMain /> */}
        {/* <ToDoList /> */}
        {/* <ApiFetch /> */}
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
