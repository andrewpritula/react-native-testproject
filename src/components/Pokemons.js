import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import "../App.css";

function Pokemons() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(10);
  const [currentUrl,setCurrentUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const [nextUrl, setNextUrl]=useState('')
  const [prevUrl, setPrevUrl]=useState('')
  
  useEffect(() => {
    fetchItems();
  }, [currentUrl]);

  const fetchItems = async () => {
    const response = await fetch(`${currentUrl}`);
    const items = await response.json();
    setItems(items.results);
    setNextUrl(items.next);
    setPrevUrl(items.previous);
  }

  function gotoNextPage(){
    setCurrentUrl(nextUrl)
  }
  function gotoPrevPage(){
    setCurrentUrl(prevUrl)
  }

  return (
    <div className="pokemon-list">
      {items.map(item => (
        <p className='pokemon-title' key={item.name}><Link className='pokemon-link' to={`/pokemons/${item.name}`}>{item.name.toUpperCase()}</Link></p>
      ))}
      <Pagination 
          gotoNextPage={nextUrl ? gotoNextPage : null}
          gotoPrevPage={prevUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default Pokemons;