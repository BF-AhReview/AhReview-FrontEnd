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
        color: white;
    }
    .register {
        margin-left: 2.5vh;
        font-weight: bold;
        color: white;
    }
`;