import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.png";
import Questions from './components/Questions/Questions';
import cards from './components/Questions/cards';
import EndGame from './components/EndGame';
import ok from '../../assets/icone_certo.png';
import notOk from '../../assets/icone_erro.png';

export default function ZapGame() {
  const [states, setStates] = useState({
    cardChoosed: 'none',
    totalCardsNumber: cards.length,
    responsesGot: []
  })

  function chooseIcon(response) {
    if (response === ok) {
      return 'zap-icon'
    } else if (response === notOk) {
      return 'no-icon'
    } else {
      return 'partial-icon'
    }
  }

  return (
    <>
      <SCMain totalCardsNumber={states.totalCardsNumber}>
        <SCTitle>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </SCTitle>

        <Questions states={states} setStates={setStates} />
      </SCMain>

      <SCFooter states={states}>
        <EndGame states={states} />
        <div>
          <span>
            {states.responsesGot.length}/{states.totalCardsNumber} CONCLUÍDOS
          </span>
        </div>
        <div>
          <span>
            {states.responsesGot.map((response, i) => <img key={i}
              src={response} 
              alt='response'
              data-test={chooseIcon(response)} 
              />)}
          </span>
        </div>
      </SCFooter>
    </>
  )
}

const SCMain = styled.main`
  width: 100%;
  height: calc(100% - 70px);
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

const SCFooter = styled.div.attrs(props => ({
  'data-test': props['data-test'] || 'footer'
}))`
  width: 100%;
  height: ${props => props.states.responsesGot.length !== props.states.totalCardsNumber ? '70px' : '171px'};
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Recursive', sans-serif;
  text-align: center;
  overflow: hidden;

  img {
    width: 23px;
    height: 23px;
    margin: 2px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  strong {
    font-weight: 700;
    color: #333333;
  }
`;
