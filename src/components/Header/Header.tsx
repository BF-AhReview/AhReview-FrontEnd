import React from 'react';
import * as s from './Header_s';

const Header: React.FC = () => {
    return (
        <s.Header>
            <s.Logo>Ah! Review</s.Logo>
            <s.Btns id="naverIdLogin" >
                <li className="login">로그인</li>
                <li className="register">등록하기</li>
            </s.Btns>
        </s.Header>
    );
}

export default Header;