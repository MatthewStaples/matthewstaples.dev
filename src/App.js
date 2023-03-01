import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="mattstapleslogo.png" className="App-logo" alt="logo" ></img>
        <p>
          professional profile in the making...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
        <img src="mugshotcropped.png "className="App-content" alt="head"></img>
      </header>
      <body className="App-body">
        <p>
          My story
        </p>
      </body>
    </div>
  );
}

// O.G Spinning React logo (ln 8)
// <img src={logo} className="App-logo" alt="logo" />

export default App;
