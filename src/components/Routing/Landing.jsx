import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PropsMain } from "../Props/PropsMain";
import { ToDoList } from "../ToDoList/ToDoList";
import { ApiFetch } from "../ApiFetch/ApiFetch";
import { Nav } from "./Nav";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<PropsMain />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/apifetch" element={<ApiFetch />} />
      </Routes>
    </BrowserRouter>
  );
};
