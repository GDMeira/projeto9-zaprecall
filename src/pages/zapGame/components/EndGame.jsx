import notOk from '../../../assets/icone_erro.png';
import party from '../../../assets/party.png';
import sad from '../../../assets/sad.png';

export default function Endgame({states}){
    const hasAnError = states.responsesGot.includes(notOk);
    let content;

    if (states.responsesGot.length !== states.totalCardsNumber) {
        content = <></>;
    } else if (hasAnError) {
        content = <>
            <div>
                <img src={sad} alt="sad" />
                <strong>{' '} Putz</strong>
            </div>
            <div>
                Ainda faltam alguns...<br />Mas não desanime!
            </div>
        </>
    } else {
        content = <>
            <div>
                <img src={party} alt="party" />
                <strong>{' '} Parabéns!</strong>
            </div>
            <div>
                Você não esqueceu de <br />nenhum flashcard!
            </div>
        </>
    }

    return content
}