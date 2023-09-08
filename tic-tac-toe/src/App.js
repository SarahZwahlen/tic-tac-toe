import "./App.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import { GameContext } from "./context/GameContext";

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
