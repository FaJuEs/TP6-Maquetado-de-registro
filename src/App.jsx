// import { useState } from 'react'//
import Registro from "./components/registro";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Registro}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
