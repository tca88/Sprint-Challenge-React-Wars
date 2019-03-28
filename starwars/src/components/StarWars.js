import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

const StarWars = props => {

    return (
        <div className="character-information-container">
            <ul>
            {props.starWarsCharsProp.map((starWarsCharacter, index) => (
                <StarWarsCharacter key={index} starWarsCharacter={starWarsCharacter}/>
            ))}
        </ul>
        </div>
    )
}

export default StarWars;