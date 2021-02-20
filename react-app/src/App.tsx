import React, { useEffect, useState } from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import List from './components/List'

const App: React.FC = () => {
  const [list, setList] = useState([]);


  return (
    <div className="App">
      <p>Changes after switching to ACR</p>
      <Header/>
      <List/>
    </div>
  );
}

export default App;