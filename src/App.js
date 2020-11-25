import logo from './logo.svg';
import './App.css';
import HookForm from './components/HookForm';
import RandomUser from './components/RandomUser';
import Fetching from './components/Fetching';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
 */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <HookForm/>
        <Fetching/>*/}
        <RandomUser/>
        
        
      </header>
    </div>
  );
}

export default App;
