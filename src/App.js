import "./App.css";
import React from "react";
import { useRecoilState } from "recoil";
import { testState } from "./store/atom";
//import components here:
import NavBar from "./components/Navbar/Navbar";

function App() {
  const [test, setTest] = useRecoilState(testState);
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
