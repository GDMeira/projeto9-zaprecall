import React from 'react';
import styled from "styled-components";
import CardQuestion from "./CardQuestion";
import cards from "./cards";

export default function Questions({states, setStates}) {

    return (
        <SCList>
            {cards.map((card, i) => <CardQuestion key={i} number={i} card={card}
                                        states={states} setStates={setStates}/>)}
        </SCList>
    )
}

const SCList = styled.div`
    width: 80%;
    max-width: 600px;
    background-color: inherit;
`;