import React from 'react';

const StarWarsCharacter = props => {

    return(
           <li className = "individual-character">
           <h2>Name: {props.starWarsCharacter.name}</h2>
           <h3>Birth Year: {props.starWarsCharacter.birth_year}</h3>
           </li>
    );
}

export default StarWarsCharacter;
