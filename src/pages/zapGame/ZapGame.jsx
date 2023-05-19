import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.png";
import Questions from './components/Questions/Questions';
import cards from './components/Questions/cards';

export default function ZapGame() {
    const [states, setStates] = useState({
        cardChoosed: 'none',
        totalCardsNumber: cards.length,
        responsesGot: []
    })

    return (
        <>
            <SCMain totalCardsNumber={states.totalCardsNumber}>
                <SCTitle>
                    <img src={logo} alt="logo" />
                    <h1>ZapRecall</h1>
                </SCTitle>

                <Questions states={states} setStates={setStates} />
            </SCMain>

            <SCFooter>
                <span>{states.responsesGot.length}/{states.totalCardsNumber} CONCLUÍDOS</span>
            </SCFooter>
        </>
    )
}

const SCMain = styled.main`
  width: 100vw;
  height: calc(100vh - 70px);
  min-height: calc(160px + ${props => props.totalCardsNumber} * 89px); //colocar nro de questoes no lugar do 8
  background-color: #fb6b6b;
  padding-bottom: 175px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SCTitle = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  h1 {
    color: #fff;
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
  }
  img {
    width: 52px;
    height: 60px;
  }
`;

const SCFooter = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Recursive', sans-serif;
`;
