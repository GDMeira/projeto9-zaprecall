import styled from "styled-components";
import React from 'react';

export default function CardQuestion({card}) {
    const {question, answer} = card;

    return (
        <li>
            <h1>{card.question}</h1>
            <h1>{card.answer}</h1>
        </li>
    )
}

const Item = styled.li`
    font-family: 'Recursive', sans-serif;
    
`;