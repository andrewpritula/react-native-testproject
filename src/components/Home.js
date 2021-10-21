import React from "react";
import Pika from '../img/pika.gif'
import '../App.css'

const Home = () => {
    return(
        <div className='home-container'>
            <img className="pika-gif" src={Pika} alt="homepage welcome"/>
            <h1>Poke API testproject</h1>
        </div>
    )
}

export default Home;