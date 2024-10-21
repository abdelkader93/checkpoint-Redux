import React from 'react';
import './App.css';
import ListTask from "./components/ListTask"
import AddTask from './components/AddTask';
function App() {
  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
