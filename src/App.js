import './App.css';
import styled from 'styled-components';
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'


const ComingSoon = styled.h1 `
  color: ${pr => pr.theme.primaryColor};
`
const Teaser = styled.p `
  color: ${pr => pr.theme.white};
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginBtn></LoginBtn>
        <ComingSoon>Future Home of Something Great</ComingSoon>
        <Teaser>Get Excited 😲</Teaser>
        <LogoutBtn></LogoutBtn>
      </header>
    </div>
  );
}

export default App;
