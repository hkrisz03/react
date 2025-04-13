import React, { useState } from "react";
import Calculator from "./calculator/Calculator";
import RPSGame from "./rps-game/RPSGame";
import "./App.css";

function App() {
  const [menu, setMenu] = useState("calculator"); // Alapértelmezett menüpont: Számológép

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Alkalmazás</h1>
        <nav>
          <button onClick={() => setMenu("calculator")}>Számológép</button>
          <button onClick={() => setMenu("rps")}>Kő-Papír-Olló</button>
        </nav>
      </header>

      <main>
        {menu === "calculator" && <Calculator />}
        {menu === "rps" && <RPSGame />}
      </main>
    </div>
  );
}

export default App;

