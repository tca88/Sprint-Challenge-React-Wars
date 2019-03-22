import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

const StarWars = props => {

    return (
        <ul>
            {props.starWarsCharsProp.map((starWarsCharacter, index) => (
                <StarWarsCharacter key={index} starWarsCharacter={starWarsCharacter}/>
            ))}
        </ul>
    )
}

export default StarWars;