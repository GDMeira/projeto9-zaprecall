import { useState } from 'react';
import styled from 'styled-components';
import logo from "../../assets/logo.png";
import Questions from './components/Questions/Questions';

function ZapGame() {

    return (
        <>
            <SCMain>
                <SCTitle>
                    <img src={logo} alt="logo" />
                    <h1>ZapRecall</h1>
                </SCTitle>

                <Questions />
            </SCMain>

            <SCFooter>
                <span>Contagem</span>
            </SCFooter>
        </>
    )
}

export default ZapGame

const SCMain = styled.main`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: #fb6b6b;
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

const SCFooter = styled.footer`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Recursive', sans-serif;
`;
