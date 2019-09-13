import React, {useEffect, useState } from 'react';
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                const charInfo = response.data.results;
                // console.log("these are the people", response);
                setCharacters(charInfo);
            })
            .catch(error => {
                console.log("The people were not returned", error)
            });

    }, []);

    return(
        <div className="list">
            {characters.map(item => {
                return (
                    <StarWarsCard
                        key={item.id}
                        name={item.name}
                        />
                    );
            })}

            </div>
    );
}