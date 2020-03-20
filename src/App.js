import React from 'react';
import Header from './components/Header';
import Time from './components/Time'
import Home from './components/Home';     
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './styles/global.css'



const App = () => (

      

    <div className="App">

      <Header />
      <Home />
      <Sobre />
      <Time />
      <Contato />
      

    </div>

);

export default App;
