import React from 'react';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <h1>📝 ToDo List с Redux Toolkit</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;