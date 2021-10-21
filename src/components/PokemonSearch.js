import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import SadFace from "../img/sad-face.png"

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  
  useEffect( () => {
    if (query !== "") {     
      getPokemon();
    }
  }, [query]);
  
  const getPokemon = async () => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    setPokemon(data);
    setError("");
    }
    catch (error) {
      setError(error);
    }
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search.toLowerCase());
    setSearch("");
  }

  if(error) {
    return (
      <div>
        <form className='search-form' onSubmit={getSearch}>
          <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
          <button className='search-button' type='submit'>Seatch</button>
        </form>
        <h1>Such pokemon not found</h1>
        <img src={SadFace} alt="Not found"/>
      </div>)
  } 
  else return(
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' placeholder="Enter pokemon name" type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div>
        <h1 className="pokemon-title"><Link className='pokemon-link' to={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link></h1>
      </div>
    </div>
  )
}

export default App;
