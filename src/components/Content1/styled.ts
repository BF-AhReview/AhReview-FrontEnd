import styled, { keyframes } from 'styled-components';

const TextKeyframes = keyframes`
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
`;

export const Contents = styled.div`
    width: 100%;
    height: 920px;
    background: linear-gradient(to bottom, #FEFFDE, white);
`;

export const Logo = styled.h1`
    color: #52734D;
    margin-left: 5rem;
    font-size: 2rem;
`;

export const Btns = styled.ul`
    margin-left: 80rem;
    display: flex;
    list-style-type: none;
    cursor: pointer;

    .login {
        font-weight: bold;
        font-size: 18px;
        color: #CBCBCB;
        &:hover {
            color: #52734D;
            transition: 0.5s;
        }
    }
    .register {
        margin-left: 2.5vh;
        font-weight: bold;
        font-size: 18px;
        color: #CBCBCB;
        &:hover {
            color: #52734D;
            transition: 0.5s;
        }
    }
`;

export const Main = styled.div`
    margin-bottom: 40vh;
    .FeedBack {
        margin-left: 100vh;
        margin-top: -45vh;
    }
`;

export const Wrapper = styled.div`
    .PlayBtn {
        margin-left: 30vh;
    }
`;

export const Texts = styled.div`
    margin-left: 30vh;
    margin-top: 10vh;
    
    .MainText {
        font-size: 8vh;
        font-weight: bold;
        color: #52734D;
        animation: ${TextKeyframes};
        animation-duration: 2s;
    }
    .SubTexts {
        margin-top: 2rem;
        animation: ${TextKeyframes};
        animation-duration: 2s;
    }
    .SubText {
        display: flex;
        font-size: 20px;
        font-weight: bold;
    }
    .BoldText {
        color: #52734D;
        margin-top : -0.1rem;
    }
    .BoldTextTwo {
        color: #52734D;
        margin-top: -0.05rem;
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 4;
`;

export const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 70vh;
    height: 40%;
    padding: 16px;
    background: #FFFFFF;
    border-radius: 10px;
    text-align: center;

    .HeaderText {
        color: #52734D;
        font-size: 2rem;
        font-weight: bold;
    }
    .Naver {
        margin-bottom: 5vh;
    }
`;