import React from 'react';

const StarWarsCharacter = props => {

    return(
        <div>
           <li>
           <h2>Name: {props.starWarsCharacter.name}</h2>
           <h3>Birth Year: {props.starWarsCharacter.birth_year}</h3>
           </li> 
        </div>
    );
}

export default StarWarsCharacter;
