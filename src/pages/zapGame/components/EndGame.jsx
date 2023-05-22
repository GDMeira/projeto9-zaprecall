import styled from 'styled-components';
import notOk from '../../../assets/icone_erro.png';
import party from '../../../assets/party.png';
import sad from '../../../assets/sad.png';

export default function Endgame({states}){
    let hasAnError = states.responsesGot.includes(notOk);
    let isGameFinished = states.responsesGot.length === states.totalCardsNumber;
    let content;

    if (!isGameFinished) {
        return
    } else if (isGameFinished && hasAnError) {
        content = <section>
            <div >
                <img src={sad} alt="sad" />
                <strong>{' '} Putz</strong>
            </div>
            <div>
                Ainda faltam alguns...<br />Mas não desanime!
            </div>
        </section>
    } else if (isGameFinished && !hasAnError) {
        content = <section>
            <div>
                <img src={party} alt="party" />
                <strong>{' '} Parabéns!</strong>
            </div>
            <div>
                Você não esqueceu de <br />nenhum flashcard!
            </div>
        </section>
    }

    return <SCText>
                {content}
            </SCText> 
        
}

const SCText = styled.section.attrs(props => ({
    'data-test': props['data-test'] || 'finish-text'
  }))`
    div {
        margin-bottom: 10px;
    }
  `