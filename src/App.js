import './App.css';
import styled from 'styled-components';
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import JobSearchComponent from './components/JobSearchComponent/JobSearchComponent';

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
        <ComingSoon>Future Home of Something Great</ComingSoon>
        <Teaser>Get Excited 😲</Teaser>
        <JobSearchComponent/>
      </header>
    </div>
  );
}

export default App;
