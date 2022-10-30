import './App.css';
import Approach from './components/Approach';
import Development from './components/Development';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Mobile from './components/Mobile';
import Recurtment from './components/Recurtment';
import Page1 from './components/Page1';
import RegardingTeam from './components/RegardingTeam';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Landing/>
      {/* <Page1></Page1> */}
      {/* <Team/> */}
      <Approach/>
      <RegardingTeam/>
      <Mobile/>
      <Development/>
      <Footer/>
      <Recurtment/>
    </div>
  );
}

export default App;
