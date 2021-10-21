import React from 'react';
import Nav from './components/Nav';
import Pokemons from './components/Pokemons';
import ItemDetail from "./components/PokemonDetails"
import PokemonSearch from "./components/PokemonSearch"
import Home from "./components/Home"
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />  
          <Switch> 
            <Route path='/' exact component={Home} />
            <Route path='/pokemons' exact component={Pokemons} />
            <Route path='/pokemons/:name' component={ItemDetail}/>
            <Route path='/search' component={PokemonSearch}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;