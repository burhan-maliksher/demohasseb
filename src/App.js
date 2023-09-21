import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main className='window'>
        {/* 1 */}
        <div className='App-data'>
          <h1 className='data-left'>
            text
          </h1>
          <div className='data-right'>
            <img className='' src={"logo.png"} width="50" height="50"/>
          </div>
        </div>
        {/* 2 */}
        <div className='App-data'>
          <h1 className='data-left'>
            text
          </h1>
          <div className='data-right'>
            <img className='' src={"logo.png"} width="50" height="50"/>
          </div>
        </div>
        {/* 3 */}
        <div className='App-data'>
          <h1 className='data-left'>
            text
          </h1>
          <div className='data-right'>
            <img className='' src={"logo.png"} width="50" height="50"/>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
