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
                <span data-test="flashcard-text">Pergunta {number + 1}</span>
                <button disabled={playingAnotherCard} onClick={number => startThisCard(number)} data-test="play-btn" >
                    <img src={startButton} alt="start" />
                </button>
            </>;
            break;

        case 'readingCard':
            cardContent = <>
                <span data-test="flashcard-text">{question}</span>
                <button onClick={() => setGameStates({ stage: 'answering', answer: 'none' })} data-test="turn-btn">
                    <img src={rotateButton} alt="rotate" />
                </button>
            </>;
            break;

        case 'answering':
            cardContent = <>
                <span data-test="flashcard-text">{answer}</span>
                <div>
                    <button onClick={() => saveAnswer(notOk)} data-test="no-btn">
                        Não lembrei
                    </button>
                    <button onClick={() => saveAnswer(almostOk)} data-test="patial-btn">
                        Quase não lembrei
                    </button>
                    <button onClick={() => saveAnswer(ok)} data-test="zap-btn">
                        Zap!
                    </button>
                </div>
            </>
            break;

        case 'closedCard':
            cardContent = <>
                <span data-test="flashcard-text">Pergunta {number + 1}</span>
                <img src={gameStates.answer} alt="answered" data-test={chooseIcon(gameStates.answer)} />
            </>;
            break;

        default:
            break;
    }

    return (
            <SCCard gameStates={gameStates}>
                {cardContent}
            </SCCard>
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

    function chooseIcon(response) {
        if (response === ok) {
            return 'zap-icon'
        } else if (response === notOk) {
            return 'no-icon'
        } else {
            return 'partial-icon'
        }
    }
}

const SCCard = styled.div.attrs(props => ({
    'data-test': props['data-test'] || "flashcard"
}))`
    font-family: 'Recursive', sans-serif;
    display: flex;
    margin: 12px;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.6s ease-in;
    backface-visibility: hidden;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        cursor: not-allowed;
    }

    ${props => {
        switch (props.gameStates.stage) {
            case 'hiddenCard':
                return `height: 45px;
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
                return `height: 111px;
                font-size: 18px;
                font-weight: 400;
                position: relative;
                justify-content: flex-start;
                align-items: flex-start;
                background-color: #ffffd4;

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
                return `height: 111px;
                background-color: #ffffd4;
                font-size: 18px;
                font-weight: 400;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                transform: rotateY(360deg);
                
                div {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 15px;
                }

                img {
                    height: 20px;
                    width: 30px;
                }

                button {
                    width: 85px;
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
                return `height: 45px;
                background-color: #ffffff;
                font-size: 16px;
                font-weight: 700;
                color: ${(props.gameStates.answer === ok ? '#2fbe34' : (props.gameStates.answer === notOk ? '#ff3030' : '#ff922e'))};
                text-decoration: line-through;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                img {
                    height: 20px;
                    width: 20px;
                    margin: 4px;
                }`;
                break;

            default:
                break;

        }
    }}

`;