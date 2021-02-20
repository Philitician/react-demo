import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import List from './components/List'

const App: React.FC = () => {
  const [list, setList] = useState([]);


  return (
    <div className="App">
      <p>WHAT IS UP Y'ALL</p>
      <Header/>
      <List/>
    </div>
  );
}

export default App;