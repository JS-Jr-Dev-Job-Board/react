// import "./App.css";
import React from "react";
import { useRecoilState } from "recoil";
import { testState } from "./store/atom";
//import components here:
import NavBar from "./components/Navbar/Navbar";

import {Grommet} from 'grommet'
import { grommet, dark } from "grommet/themes";


function App() {
  const [test, setTest] = useRecoilState(testState);
  return (

    <Grommet theme={grommet} full responsive={true}>
    <div className="App">
      <header className="App-header">
        <NavBar />
       
      </header>
    </div>
    </Grommet >
  );
}

export default App;
