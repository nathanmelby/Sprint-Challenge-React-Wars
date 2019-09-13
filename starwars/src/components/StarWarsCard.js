import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width:200px;
    heigh:300px;
    background-color:white;
    `;

const StarWarsCard = props => {
    return (
        <Card key={props.id}>
            <h1>{props.name}</h1>
            <h2>Gender:{props.gender}</h2>
            {/* <h3>Films: {props.films}</h3> */}
            <h2>Birth Year: {props.birth_year}</h2>
            
        </Card>
    );
};

export default StarWarsCard