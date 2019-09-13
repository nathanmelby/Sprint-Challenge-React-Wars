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
                console.log("these are the people", response.data.results);
                setCharacters(charInfo);
            })
            .catch(error => {
                console.log("The people were not returned", error)
            });

    }, []);

    return(
        <div className="main-container">
            {characters.map(item => {
                return (
                    <StarWarsCard
                        key={item.object}
                        name={item.name}
                        gender={item.gender}
                        birth_year={item.birth_year}
                        />
                    );
            })}
            </div>
    );
}