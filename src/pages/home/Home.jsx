import styled from 'styled-components';
import logo from "../../assets/logo.png";

export default function Home({setPage}) {
    return (
        <SCHome >
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={() => setPage('ZapGame')}>Iniciar Recall!</button>
        </SCHome>
    )
}

const SCHome = styled.main`
  width: 100%;
  height: 100%;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  * {
    margin-bottom: 30px;
  }

  img {
    width: 136px;
    height: 161px;
  }

  h1 {
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
  }

  button {
    width: 246px;
    height: 44px;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #d70909;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;