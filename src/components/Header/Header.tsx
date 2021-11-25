import React from 'react';
import * as s from './styled';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <s.Header>
            <s.Logo>Ah! Review</s.Logo>
            <s.Btns id="naverIdLogin" >
                <li className="login">로그인</li>
                <Link to="/post"><li className="register">등록하기</li></Link>
            </s.Btns>
        </s.Header>
    );
}

export default Header;