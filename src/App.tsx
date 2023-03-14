import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autosuggest from './components/Autosuggest/Autosuggest';

function App() {
  return (
    <div className="App">
      <h1>
        Hi! Here you can search for the clothing that you want.
      </h1>
        <Autosuggest/>
    </div>
  );
}

export default App;
