import styled from "styled-components";
import { useState } from 'react';
import startButton from '../../../../assets/seta_play.png';
import rotateButton from '../../../../assets/seta_virar.png';
import ok from '../../../../assets/icone_certo.png';
import almostOk from '../../../../assets/icone_quase.png';
import notOk from '../../../../assets/icone_erro.png';

export default function CardQuestion({ card, number, states, setStates }) {
    const [gameStates, setGameStates] = useState({ stage: 'hiddenCard', answer: 'none' });
    const { question, answer } = card;
    const playingAnotherCard = states.cardChoosed !== 'none';
    let cardContent;

    switch (gameStates.stage) {
        case 'hiddenCard':
            cardContent = <>
                <span>Pergunta {number + 1}</span>
                <button disabled={playingAnotherCard} onClick={number => startThisCard(number)} >
                    <img src={startButton} alt="start" />
                </button>
            </>;
            break;

        case 'readingCard':
            cardContent = <>
                <span>{question}</span>
                <button onClick={() => setGameStates({ stage: 'answering', answer: 'none' })} >
                    <img src={rotateButton} alt="rotate" />
                </button>
            </>;
            break;

        case 'answering':
            cardContent = <>
                <span>{answer}</span>
                <div>
                    <button onClick={() => saveAnswer(notOk)} >
                        Não lembrei
                    </button>
                    <button onClick={() => saveAnswer(almostOk)} >
                        Quase não lembrei
                    </button>
                    <button onClick={() => saveAnswer(ok)} >
                        Zap!
                    </button>
                </div>
            </>
            break;

        case 'closedCard':
            cardContent = <>
                <span>Pergunta {number + 1}</span>
                <button>
                    <img src={gameStates.answer} alt="answered" />
                </button>
            </>;
            break;

        default:
            break;
    }

    return (
        <li>
            <SCCard gameStates={gameStates}>
                {cardContent}
            </SCCard>
        </li>
    )

    function startThisCard(number) {
        setStates({ ...states, cardChoosed: number });
        setGameStates({ stage: 'readingCard', answer: 'none' });
    }

    function saveAnswer(image) {
        setGameStates({ stage: 'closedCard', answer: image });
        setStates({
            ...states,
            responsesGot: [...states.responsesGot, image],
            cardChoosed: 'none'
        });
    }
}

const SCCard = styled.div`
    font-family: 'Recursive', sans-serif;
    display: flex;
    margin: 12px;
    padding: 20px;
    border-radius: 5px;
    transition: all 0.4s ease-in;

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
    }

    ${props => {
        switch (props.gameStates.stage) {
            case 'hiddenCard':
                return `height: 65px;
                background-color: #ffffff;
                font-size: 16px;
                font-weight: 700;
                justify-content: space-between;
                align-items: center;

                img {
                    height: 20px;
                    width: 20px;
                }

                button {
                    background: none;
                    border: none;
                    margin: 4px;
                }`;
                break;

            case 'readingCard':
                return `height: 131px;
                background-color: #ffffd4;
                font-size: 18px;
                font-weight: 400;
                position: relative;
                justify-content: flex-start;
                align-items: flex-start;

                img {
                    height: 20px;
                    width: 30px;
                }

                button {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background: none;
                    border: none;
                    margin: 4px;
                }`;
                break;

            case 'answering':
                return `height: 131px;
                background-color: #ffffd4;
                font-size: 18px;
                font-weight: 400;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                
                div {
                    display: flex;
                    justify-content: space-between;
                }

                img {
                    height: 20px;
                    width: 30px;
                }

                button {
                    width: 90px;
                    heigth: 40px;
                    font-size: 12px;
                    color: #fff;
                    border-radius: 5px;
                    margin: 4px;
                }

                button:nth-child(1) {
                    background-color: #ff3030;
                }

                button:nth-child(2) {
                    background-color: #ff922e;
                }
                button:nth-child(3) {
                    background-color: #2fbe34;
                }`;
                break;

            case 'closedCard':
                return `height: 65px;
                background-color: #ffffff;
                font-size: 16px;
                font-weight: 700;
                text-decoration: line-through;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                img {
                    height: 20px;
                    width: 20px;
                }

                button {
                    background: none;
                    border: none;
                }`;
                break;

            default:
                break;

        }
    }}

`;