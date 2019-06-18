import React from 'react';
import './App.css';
import Friends from './components/friends'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
         <Friends/>
      </Router>
    </div>
  );
}

export default App;
