import styled from 'styled-components';

export const Contents = styled.div`
    width: 100%;
    height: 897px;
    background: linear-gradient(to bottom, #91C788, white);
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

    .login {
        font-weight: bold;
        font-size: 18px;
        color: white;
    }
    .register {
        margin-left: 2.5vh;
        font-weight: bold;
        font-size: 18px;
        color: white;
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
    }
    .SubTexts {
        margin-top: -2rem;
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