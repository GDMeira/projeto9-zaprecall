import { useState } from 'react';
import startButton from '../../../../assets/seta_play.png';
import rotateButton from '../../../../assets/seta_virar.png';
import ok from '../../../../assets/icone_certo.png';
import almostOk from '../../../../assets/icone_quase.png';
import notOk from '../../../../assets/icone_erro.png';
import SCCard from "./SCCard";

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