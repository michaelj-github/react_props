import React from 'react';
import "./Pokecard.css";

const Pokecard = (props) => {  
return (
    <div className="Pokecard">
      <p className="Pokecard-name">{props.name}</p>
      < img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="A Pokecard" />
      <p>Type: {props.type}</p>
    </div>
  )
}

export default Pokecard;