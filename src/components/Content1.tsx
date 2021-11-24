import React from 'react';
import * as s from './Content1_s';

const Content1: React.FC = () => {
    return (
        <s.Contents>
            <s.Header>
                <s.Logo>Ah! Review</s.Logo>
                <s.Btns>
                    <li className="login">로그인</li>
                    <li className="register">등록하기</li>
                </s.Btns>
            </s.Header>
        </s.Contents>
    );
}

export default Content1;
