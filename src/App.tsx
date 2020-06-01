import React from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button btnType="primary">按钮</Button>
      </header>
    </div>
  );
}

export default App;
