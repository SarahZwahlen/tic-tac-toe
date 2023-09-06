import "./App.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [isReset, setIsReset] = useState(false)
  function resetPlayers(e) {
    setIsReset(true);
    
   }
  return (
  <>
    <NavBar handleNewGame={resetPlayers} />
    <Main isReset={isReset} setIsReset={setIsReset}/>
    <Footer/>
  </>
  );
}

export default App;
