import React from 'react';
import styled from "styled-components";
import CardQuestion from "./CardQuestion";
import cards from "./cards";

export default function Questions() {

    return (
        <SCList>
            {cards.map((card, i) => <CardQuestion key={i} card={card}/>)}
        </SCList>
    )
}

const SCList = styled.ul`
    width: 66vw;
    max-width: 600px;
`;