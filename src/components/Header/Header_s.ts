import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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