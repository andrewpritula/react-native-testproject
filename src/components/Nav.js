import React from "react";
import { Link } from 'react-router-dom'
import Pokeball from "../img/pokeball.webp"
import "../App.css";

function Nav() {
    return(
        <nav className='nav'>
            <Link to='/'>
                <img className="logo" src={Pokeball} alt="logo"/>
            </Link>
            <ul className='nav-links'>
                <Link className='nav-link' to='/search'>
                <li>Search</li>
                </Link>
                <Link className='nav-link' to='/pokemons'>
                <li>Pokemons</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;