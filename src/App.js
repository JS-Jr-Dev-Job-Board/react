import "./App.css";
import styled from "styled-components";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
import { useRecoilState } from "recoil";
import { testState } from "./store/atom";

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
        <ComingSoon>Future Home of Something Great</ComingSoon>
        <Teaser>Get Excited 😲</Teaser>
        <Teaser>{test}</Teaser>
      </header>
    </div>
  );
}

export default App;
