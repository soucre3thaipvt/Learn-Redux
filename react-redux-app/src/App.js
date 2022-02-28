import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
import {useState} from 'react';
function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoApp todos={[]}/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;