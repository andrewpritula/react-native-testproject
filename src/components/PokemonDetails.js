import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

function PokemonDetails({ match }) {
  const [item, setItem] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });

  useEffect(() => {
    fetchItem();
  }, [])

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`);
    const item = await fetchItem.json();
    console.log(item);
    setItem({
      name: item.name,
      species: item.species.name,
      img: item.sprites.front_default,
      hp: item.stats[0].base_stat,
      attack: item.stats[1].base_stat,
      defense: item.stats[3].base_stat,
      type: item.types[0].type.name,
      base_experience: item.base_experience
    });
  }

  return (
    <div>
      <div className='pokemon-container'>
        <div className="pokemon-item">
          <h1>{item.name.toUpperCase()}</h1>
          <h2>Base experiense: {item.base_experience}</h2>
          <h2>Species: {item.species}</h2>
          <h2>Type: {item.type}</h2>
          <h2>HP: {item.hp}</h2>
          <h2>Attack: {item.attack}</h2>
          <h2>Defense: {item.defense}</h2>
          <img className="pokemon-img" src={item.img} alt="pokemon"/>
        </div>
      </div>
      <button className='button'><Link className="btn-link" to={`/`}>Go to homepage</Link></button>
      <button className='button'><Link className="btn-link" to={`/pokemons`}>Go to all pokemons</Link></button>
      <button className='button'><Link className="btn-link" to={`/search`}>Go pokemon search</Link></button>
    </div>
  );
}

export default PokemonDetails;