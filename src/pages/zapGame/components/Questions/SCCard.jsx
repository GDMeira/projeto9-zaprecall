import styled from "styled-components";
import ok from '../../../../assets/icone_certo.png';
import almostOk from '../../../../assets/icone_quase.png';
import notOk from '../../../../assets/icone_erro.png';

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
                background-color: #FFFFD4;

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
                // transform: rotateY(360deg);
                
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

export default SCCard;