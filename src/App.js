import "./App.css";
import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { testState } from "./store/atom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import components here:
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import Portfolio from "./components/Portfolio.jsx";

const ComingSoon = styled.h1`
  color: ${(pr) => pr.theme.primaryColor};
`;
const Teaser = styled.p`
  color: ${(pr) => pr.theme.white};
`;

function App() {
  const [test, setTest] = useRecoilState(testState);
  return (
    <div className="App">
      <header className="App-header">
        <LoginBtn></LoginBtn>
        <ComingSoon>Future Home of Something Great</ComingSoon>
        <Teaser>Get Excited 😲</Teaser> 
        <Teaser> This is a "{test}" of Recoil State</Teaser>
        <LogoutBtn></LogoutBtn>
      </header>
    </div>
  );
}

export default App;
