import "./App.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <>
      <NavBar />
        <Main />
      <Footer />
    </>
  );
}

export default App;
