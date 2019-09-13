import React from 'react';

const StarWarsCard = props => {
    return (
        <div className="char-list" key={props.id}>
            <h1>{props.name}</h1>
            
        </div>
    );
};

export default StarWarsCard