import React from 'react';
import styled from "styled-components";


const CardContainer = styled.div `
display:flex;
justify-content: center;
margin-left:auto;
margin-right:auto;
width:50%;
`;

const Card = styled.div`
    
    width:400px;
    heigh:500px;
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius:5px;
    margin-top:16px;
    color:black;
    font-family: 'Poppins', sans-serif;
    `;

const StarWarsCard = props => {
    return (
        <CardContainer>
            <Card key={props.object}>
                <h1>{props.name}</h1>
                <h2>Gender: {props.gender}</h2>
                <h3>Birth Year: {props.birth_year}</h3>        
            </Card>
        </CardContainer>
    );
};

export default StarWarsCard