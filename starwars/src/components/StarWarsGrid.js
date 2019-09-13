import React, {useEffect, useState } from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(``)
            .then(response => {
                const characters = response.people;
                console.log("these are the people", characters);
                setCharacters(characters);
            })
            .catch(error => {
                console.log("The people were not returned", error)
            });

    }, []);

    return(
        <div className="character-cards">
            {characters.map(item => {
                return (
                    <StarWarsCard
                        key={characters.id}
                        name={characters.name}
                        />
                    );
            })}

            </div>
    );
}