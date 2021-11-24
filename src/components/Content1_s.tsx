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

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.h1`
    color: #52734D;
    margin-left: 5rem;
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
    .FeedBack {
        margin-left: 100vh;
        margin-top: -36vh;
    }
`;

export const Wrapper = styled.div`
    margin-bottom: -10vh; 

    .PlayBtn {
        margin-left: 40vh;
    }
`;

export const Texts = styled.div`
    margin-left: 40vh;

    .MainText {
        font-size: 8vh;
        font-weight: bold;
        color: #52734D;
        animation: ${TextKeyframes};
        animation-duration: 2s;
    }
    .SubTexts {
        margin-top: -2rem;
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